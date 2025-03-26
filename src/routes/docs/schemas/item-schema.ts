export const itemSchemas = {
  CreateItemRequest: {
    type: "object",
    required: ["code", "name", "quantity", "category"],
    properties: {
      code: {
        type: "string",
        example: "ITM-001",
        description: "Kode unik item",
      },
      name: {
        type: "string",
        example: "Bolt 5mm",
        description: "Nama item",
      },
      quantity: {
        type: "number",
        example: 100,
        description: "Jumlah item",
      },
      category: {
        type: "string",
        example: "Elektronik",
        description: "Kategori item",
      },
      stack: {
        type: "string",
        example: "A1",
        description: "Lokasi penyimpanan di gudang",
      },
      in: {
        type: "string",
        format: "date-time",
        example: "2023-01-01T00:00:00Z",
        description: "Tanggal masuk item",
      },
    },
  },
  UpdateItemRequest: {
    type: "object",
    properties: {
      code: {
        type: "string",
        example: "ITM-001",
        description: "Kode unik item",
      },
      name: {
        type: "string",
        example: "Bolt 5mm",
        description: "Nama item",
      },
      quantity: {
        type: "number",
        example: 100,
        description: "Jumlah item",
      },
      category: {
        type: "string",
        example: "Elektronik",
        description: "Kategori item",
      },
      stack: {
        type: "string",
        example: "A1",
        description: "Lokasi penyimpanan di gudang",
      },
      in: {
        type: "string",
        format: "date-time",
        example: "2023-01-01T00:00:00Z",
        description: "Tanggal masuk item",
      },
      out: {
        type: "string",
        format: "date-time",
        example: "2023-01-01T00:00:00Z",
        description: "Tanggal keluar item",
      },
    },
  },
  SoftDeleteItem: {
    type: "object",
    properties: {
      code: {
        type: "string",
        example: "ITM-001",
        description: "Kode unik item",
      },
      name: {
        type: "string",
        example: "Bolt 5mm",
        description: "Nama item",
      },
      quantity: {
        type: "number",
        example: 100,
        description: "Jumlah item",
      },
      category: {
        type: "string",
        example: "Elektronik",
        description: "Kategori item",
      },
      stack: {
        type: "string",
        example: "A1",
        description: "Lokasi penyimpanan di gudang",
      },
      in: {
        type: "string",
        format: "date-time",
        example: "2023-01-01T00:00:00Z",
        description: "Tanggal masuk item",
      },
      out: {
        type: "string",
        format: "date-time",
        example: "2023-01-01T00:00:00Z",
        description: "Tanggal keluar item",
      },
      deletedAt: {
        type: "string",
        format: "date-time",
        nullable: true,
        description: "Tanggal soft delete, null jika belum dihapus",
      },
    },
  },
  Item: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "ID unik item",
      },
      code: {
        type: "string",
        description: "Kode unik item",
      },
      name: {
        type: "string",
        description: "Nama item",
      },
      quantity: {
        type: "number",
        description: "Jumlah item",
      },
      category: {
        type: "string",
        description: "Kategori item",
      },
      stack: {
        type: "string",
        description: "Lokasi penyimpanan di gudang",
      },
      in: {
        type: "string",
        format: "date-time",
        description: "Tanggal masuk item",
      },
      out: {
        type: "string",
        format: "date-time",
        description: "Tanggal keluar item",
      },
    },
  },
  ItemResponses: {
    "404Response": {
      type: "object",
      properties: {
        message: {
          type: "string",
          example: "Item not found",
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
