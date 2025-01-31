# HNG 12 Backend Stage Zero Task

This is a simple Node.js server using Express that returns a JSON response with an email, the current datetime in ISO 8601 UTC format, and a GitHub URL.

## Features

- Returns a JSON response with:
  - email: A sample email address
  - current_datetime: The current datetime in ISO 8601 UTC format
  - github_url: A sample GitHub profile link
- Uses Express for fast and lightweight server handling

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/holabayor/hng12-stage-one.git
   cd hng12-stage-one
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Run the server**

   ```sh
   node server.js
   ```

4. **Test the server**
   Open a browser or use curl to access:

   `http://localhost:3000`

**Example Response**

```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-31T12:00:00.000Z",
  "github_url": "https://github.com/holabayor/hng12-stage-one"
}
```

**Technologies Used**

- Node.js
- Express.js

**Hire Dev**

Looking to hire a vetted Node.js developer? Check out [HNG Hire](https://hng.tech/hire)
