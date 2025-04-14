FROM node:18-alpine

WORKDIR /app

# Install PNPM if not already available
RUN npm install -g pnpm

# Copy and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install 

# Copy rest of code to a separate directory
RUN mkdir src
COPY . ./src

# Expose port
EXPOSE 3000

# Set working directory to src and run the development server
WORKDIR /app/src
CMD ["pnpm", "dev"]
