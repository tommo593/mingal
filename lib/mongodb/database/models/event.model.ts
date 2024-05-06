import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
  id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: string; name: string }; // Assuming the ID of the category is stored as a string
  organiser: { _id: string; firstName: string; lastName: string }; // Assuming the ID of the user is stored as a string
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organiser: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.event || model("Event", EventSchema);

export default Event;
