import { HfInference } from "@huggingface/inference";
import dotenv from "dotenv"

dotenv.config();

const HUGGING_FACE_API = process.env.HUGGING_FACE_API

const inference = new HfInference(HUGGING_FACE_API);

const model = "nlpconnect/vit-gpt2-image-captioning";

const imageURL = "https://upload.wikimedia.org/wikipedia/commons/2/2e/Norton_Motorcycle.jpg";

const response = await fetch(imageURL);
const imageBLOB = await response.blob()

const result = await inference.imageToText({
    data: imageBLOB,
    model:model,
})
console.log(result)