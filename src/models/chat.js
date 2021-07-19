import mongoose from 'mongoose';
const { Schema } = mongoose;

export const conversationSchema = new Schema({
  members:  [Schema.Types.ObjectId, Schema.Types.ObjectId],
});

export const Conversation = mongoose.model('Conversation', conversationSchema);

export const messageSchema = new Schema({
    conversationId: Schema.Types.ObjectId,
    author: Schema.Types.ObjectId,
    body: String,
});

export const Message = mongoose.model('Message', messageSchema);