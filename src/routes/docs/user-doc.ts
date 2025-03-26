export const userPath = {
  "/auth/signup": {
    post: {
      tags: ["Authentication"],
      summary: "Mendaftarkan pengguna baru",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/SignUpRequest",
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Pendaftaran berhasil",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AuthResponses/200Response",
              },
            },
          },
        },
        "400": {
          description: "Invalid user data",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AuthResponses/400Response",
              },
            },
          },
        },
        "409": {
          description: "User already exist",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AuthResponses/409Response",
              },
            },
          },
        },
      },
    },
  },
  "/auth/signin": {
    post: {
      tags: ["Authentication"],
      summary: "Login pengguna",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/SignInRequest",
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Login berhasil",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AuthResponses/200Response",
              },
            },
          },
        },
        "400": {
          description: "Invalid email or password",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AuthResponses/401Response",
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AuthResponses/500Response",
              },
            },
          },
        },
      },
    },
  },
};
