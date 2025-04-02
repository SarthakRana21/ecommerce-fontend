# Use the official Nginx image
FROM nginx:alpine

# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static website files to Nginx's HTML directory
COPY . /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
