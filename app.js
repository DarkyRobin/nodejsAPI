const express = require("express");
const userRoutes = require("./routes/userRoutes")
const app = express();

app.use(express.json);
app.use('api/users', userRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = app;

