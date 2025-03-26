export const authSchemas = {
  SignUpRequest: {
    type: "object",
    required: ["name", "email", "password"],
    properties: {
      name: {
        type: "string",
        example: "User Example",
      },
      email: {
        type: "string",
        format: "email",
        example: "user@example.com",
      },
      password: {
        type: "string",
        format: "password",
        minLength: 6,
        example: "password123",
      },
    },
  },
  SignInRequest: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {
        type: "string",
        format: "email",
        example: "user@exampletst.com",
      },
      password: {
        type: "string",
        format: "password",
        example: "password123",
      },
    },
  },
  AuthResponses: {
    "200Response": {
      type: "object",
      properties: {
        id: {
          type: "string",
          example: "67e34c986ea62852ab8ded4",
        },
        name: {
          type: "string",
          example: "user example",
        },
        email: {
          type: "string",
          example: "user@exampletst.com",
        },
        token: {
          type: "string",
          example:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTM0Yzk4NmVhNjI4NTJhYjhkZWQ0YyIsImlhdCI6MTc0ojk0OTUyOCwiZXhwIjoxNzQyOTUzMTI4fQ.gqMOm7OxImu-7sxM8zDOqumVtaUd7zM9i7JIlI2rIRM",
        },
      },
    },
    "400Response": {
      type: "object",
      properties: {
        message: {
          type: "string",
          example: "Invalid data",
        },
      },
    },
    "401Response": {
      type: "object",
      properties: {
        message: {
          type: "string",
          example: "Invalid email or password",
        },
      },
    },
    "409Response": {
      type: "object",
      properties: {
        message: {
          type: "string",
          example: "User already exists",
        },
      },
    },
    "500Response": {
      type: "object",
      properties: {
        message: {
          type: "string",
          example: "Server error",
        },
      },
    },
  },
};
