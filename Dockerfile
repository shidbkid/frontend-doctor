# Step 1: Use a lightweight Node.js base image
FROM node:18-alpine AS builder

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application code
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Use a minimal image for production (Multistage Build)
FROM node:18-alpine

# Step 8: Set working directory inside the container
WORKDIR /app

# Step 9: Copy only the built files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Step 10: Set environment variables (optional)
ENV NODE_ENV=production

# Step 11: Expose the port your app runs on
EXPOSE 3000

# Step 12: Command to start the application
CMD ["npm", "start"]
