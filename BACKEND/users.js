const express = require('express');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

// PostgreSQL connection pool
const pool = new Pool({
  user: 'Balaji',
  host: 'localhost',
  database: 'Users',
  password: '1234',
  port: 5432,
});

app.use(express.json());

// Signup endpoint
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await pool.query('INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3)', [username, email, hashedPassword]);
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('An error occurred while creating the user');
  }
});

// Login endpoint

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
    const user = result.rows[0];

    if (!user) {
      res.status(401).send('Invalid username or password');
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password_hash);

    if (passwordMatch) {
      // Successful login
      const { id, username, email, role } = user;
      res.status(200).json({ id, username, email, role }); // Send user details including role
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('An error occurred while logging in');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});