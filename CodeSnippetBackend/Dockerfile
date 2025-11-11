# 1️⃣ Use a lightweight Java 17 image
FROM eclipse-temurin:17-jdk-jammy as builder

# 2️⃣ Set working directory
WORKDIR /app

# 3️⃣ Copy everything
COPY . .

# 4️⃣ Give permission & build the Spring Boot JAR
RUN chmod +x mvnw && ./mvnw clean package -DskipTests

# ====================================================
# 5️⃣ Create a second lightweight image just to run the app
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# 6️⃣ Copy only the built JAR from previous image
COPY --from=builder /app/target/*.jar app.jar

# 7️⃣ Expose your app port
EXPOSE 10000

# 8️⃣ Run the JAR file
ENTRYPOINT ["java", "-jar", "app.jar"]

