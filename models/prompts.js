import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
  creator: {
    type: String,
    required: [true, "creator is required."],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;