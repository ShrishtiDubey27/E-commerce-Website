# ShopAura

ShopAura is a comprehensive e-commerce website that provides users with a seamless online shopping experience. Built with modern technologies, it features a dynamic frontend, robust backend, secure authentication, and scalable database management.

## Tech Stack
### Frontend
- **React.js**
- **Tailwind CSS**
### Backend
- **Node.js & Express.js**
### Database
- **MongoDB**
- **Mongoose**
### Additional Technologies
- **JWT (JSON Web Tokens)**
- **Cloudinary**

## Key Features

- **User Authentication**: Secure login and registration using JWT.
- **Admin Authorization**: Only authorized admin users can add, remove, or update products.
- **Product Management**: Comprehensive product catalog with support for multiple categories.
- **Image Handling**: Cloudinary integration for smooth media uploads and management.
- **Responsive Design**: Tailwind CSS ensures the site looks great on all devices.
- **Modern UI**: React.js enhances user interaction with a smooth and responsive interface.

## Installation and Setup

To get a local copy of this project up and running, follow these steps:

### Prerequisites
- Node.js installed on your machine.
- MongoDB Atlas or a local instance of MongoDB running.

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ShopAura.git
   cd ShopAura
   
2. **Navigate to each directory and install dependencies**:
   ```bash
    cd backend
    npm install

    cd ../frontend
    npm install
  
    cd ../admin
    npm install

3. **Create .env files as described below**:

     To ensure proper functionality of the ShopAura e-commerce project, it is important to set up environment variable files for the backend, frontend, and admin sections.
     Create .env file in each folder.
      ```env
      ### Backend (`/backend/.env`)
      
      MONGODB_URI="mongodb+srv://<username>:<password>@<cluster>.mongodb.net"
      CLOUDINARY_API_KEY="your-cloudinary-api-key"
      CLOUDINARY_SECRET_KEY="your-cloudinary-secret-key"
      CLOUDINARY_NAME="your-cloudinary-name"
      JWT_SECRET="your-jwt-secret"
      ADMIN_EMAIL="admin@example.com"
      ADMIN_PASSWORD="your-admin-password"
      -----------------------------------------------------------------------------------------------------
      ### Frontend (`/backend/.env`)
      
      VITE_BACKEND_URL='http://localhost:{port}'
      VITE_RAZORPAY_KEY_ID="your-razorpay-key-id"
      -----------------------------------------------------------------------------------------------------
      ### Admin (`/admin/.env`)
      VITE_BACKEND_URL='http://localhost:{port}'

      ```



**Reminder**: Be sure to replace placeholders with your own project-specific credentials.

4. **Run the project**:

      ```
      ### Backend
          cd backend
          npm run server
      -----------------------------------------------------------------------------------------------------
      ### Frontend
          cd ../frontend
          npm run dev
      -----------------------------------------------------------------------------------------------------
      ### Admin
          cd ../admin
          npm run dev
      ```

