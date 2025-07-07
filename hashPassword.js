import bcrypt from 'bcryptjs';

const password = "admin123";  // ✅ Change this if needed
const saltRounds = 10;

bcrypt.hash(password, saltRounds, function(err, hash) {
    if (err) throw err;
    console.log("Hashed Password:", hash);
});
