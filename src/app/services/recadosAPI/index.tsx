import Axios, { AxiosResponse } from 'axios';


const baseUrl= 'https://tasklist-back-crhist0.herokuapp.com/'

export default async function CreateAccount(data: {name: String, pass: String, Rpass: String}){
try {
  const resposta = await Axios.post(baseUrl + 'user', data)
return resposta 
} catch (error) {
  return error
}

// return await Axios.post(baseUrl + 'user', data)

}
