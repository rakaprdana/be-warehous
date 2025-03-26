import swaggerJsDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";
import { userPath } from "./user-doc";
import { itemsPath } from "./items-doc";
import { authSchemas } from "./schemas/auth-schema";
import { itemSchemas } from "./schemas/item-schema";
const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.3",
  info: {
    title: "Warehouse Management API Documentation",
    description: "Description here!",
    version: "1.0.0",
  },
  servers: [
    {
      url: "https://warehous-production-api.up.railway.app/api",
      description: "Production server",
    },
    {
      url: "http://localhost:3000/api",
      description: "Development server",
    },
  ],
  components: {
    schemas: {
      ...authSchemas,
      ...itemSchemas,
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  paths: {
    ...userPath,
    ...itemsPath,
  },
};

const options: OAS3Options = {
  swaggerDefinition,
  apis: ["./routes/*.ts"],
};

export default swaggerJsDoc(options);
