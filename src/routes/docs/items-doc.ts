export const itemsPath = {
  "/items": {
    get: {
      tags: ["Items"],
      summary: "Mendapatkan daftar semua item",
      responses: {
        "200": {
          description: "Daftar item berhasil didapatkan",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Item",
                },
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
    post: {
      tags: ["Items"],
      summary: "Membuat item baru",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/CreateItemRequest",
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Item berhasil dibuat",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Item",
              },
            },
          },
        },

        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ItemResponses/500Response",
              },
            },
          },
        },
      },
      security: [{ bearerAuth: [] }],
    },
  },
  "/items/{id}": {
    get: {
      tags: ["Items"],
      summary: "Mendapatkan item berdasarkan ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "Item berhasil didapatkan",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Item",
              },
            },
          },
        },
        "404": {
          description: "Item not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ItemResponses/404Response",
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
      security: [{ bearerAuth: [] }],
    },
    put: {
      tags: ["Items"],
      summary: "Memperbarui item",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UpdateItemRequest",
            },
          },
        },
      },
      responses: {
        "200": {
          description: "Item berhasil diperbarui",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Item",
              },
            },
          },
        },

        "404": {
          description: "Item not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ItemResponses/404Response",
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ItemResponses/500Response",
              },
            },
          },
        },
      },
      security: [{ bearerAuth: [] }],
    },
    delete: {
      tags: ["Items"],
      summary: "Soft delete item",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      responses: {
        "200": {
          description: "Item berhasil dihapus",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SoftDeleteItem",
              },
            },
          },
        },
        "404": {
          description: "Item not found",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ItemResponses/404Response",
              },
            },
          },
        },
        "500": {
          description: "Server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ItemResponses/500Response",
              },
            },
          },
        },
      },
      security: [{ bearerAuth: [] }],
    },
  },
};
