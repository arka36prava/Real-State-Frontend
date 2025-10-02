import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68ab500b001fa942628a'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
