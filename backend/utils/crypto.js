import EncryptRsa from 'encrypt-rsa';

const encryptRsa = new EncryptRsa();

const { privateKey, publicKey} = encryptRsa.createPrivateAndPublicKeys();

export const encrypt = (plainText) => {
    return encryptRsa.encryptStringWithRsaPublicKey({
        plainText,
        publicKey
    });
}

export const decrypt = (encryptedText) => {
    return encryptRsa.decryptStringWithRsaPrivateKey({
        encryptedText,
        privateKey
    })
}
