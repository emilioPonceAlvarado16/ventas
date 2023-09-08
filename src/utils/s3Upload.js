import { Auth, Amplify, Storage } from 'aws-amplify';

export const configureDynamicBucket = (userId) => {
  Storage.configure({
    AWSS3: {
      bucket: `${userId}-formatmaker`, // Sustituye 'your-bucket-suffix' con el sufijo de tu bucket
      region: 'us-east-1', // Asegúrate de especificar la región aquí
    }
  });
};

export const s3Upload = async (file, currentUser) => {
  const userId = currentUser.attributes.sub; // Obtén el user_id desde Cognito
  configureDynamicBucket(userId); // Configura el bucket con base en el user_id
  
  const fileName = `${currentUser.username}/${Date.now()}-${file.name}`;

  try {
    const result = await Storage.put(fileName, file, {
      level: 'protected', // puedes cambiar a 'private' según tus necesidades
      contentType: file.type,
    });
    return result.key;
  } catch (error) {
    console.error('Error uploading file: ', error);
    return null;
  }
};

export const s3Read = async (key, currentUser) => {
  const userId = currentUser.attributes.sub; // Obtén el user_id desde Cognito
  configureDynamicBucket(userId); // Configura el bucket con base en el user_id

  try {
    const signedUrl = await Storage.get(key, {
      level: 'protected', // asegúrate de que el nivel coincida con el de la subida
      identityId: currentUser.attributes.sub // esto podría ser necesario dependiendo de tus reglas de permisos
    });
    return signedUrl;
  } catch (error) {
    console.error('Error reading file from S3: ', error);
    return null;
  }
};
