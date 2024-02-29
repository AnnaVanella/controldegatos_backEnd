export default ({ env }) => ({
    // ..
   transformer: {
      enabled: true,
      config: {
        prefix: "/api/",
        responseTranforms: {
            removeAttributesKey: true,
            removeDataKey: true,
        }
      }
    },
      upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
      // ...
    });