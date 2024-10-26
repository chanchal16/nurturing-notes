import mongoose, { Document, Model, Schema } from 'mongoose';

interface IJournalEntry extends Document {
  title: string;
  content: string;
  date: Date;
  tags: string[];
  userId: string;
}

const JournalEntrySchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  content: {
    type: String,
    required: [true, "Content is required"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [String],
    default: [],
  },
  userId: {
    type: String,
    required: true,
  },
});

const JournalEntry: Model<IJournalEntry> = mongoose.models.JournalEntry || mongoose.model<IJournalEntry>('JournalEntry', JournalEntrySchema);

export default JournalEntry;
export type { IJournalEntry };
