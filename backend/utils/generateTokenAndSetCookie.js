import jwt from "jsonwebtoken"; 

// Function to generate a JWT token and set it as a cookie
export const generateTokenAndSetCookie = (res, userId) => {
	// Create a JWT token with user ID and a secret, set to expire in 7 days
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "7d", 
	});

	
	res.cookie("token", token, {
		httpOnly: true, // Prevent client-side access to the cookie
		secure: process.env.NODE_ENV === "production", // Use secure cookies in production
		sameSite: "strict", // Prevent CSRF attacks by restricting cookie sending
		maxAge: 7 * 24 * 60 * 60 * 1000, // Cookie expiration time (7 days)
	});

	return token; // Return the generated token
};