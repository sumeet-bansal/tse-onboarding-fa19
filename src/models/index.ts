import mongoose from 'mongoose';

const { Schema } = mongoose;

export const ChannelSchema = new Schema({
  name: String,
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message',
  }],
  message_count: Number,
});

export const MessageSchema = new Schema({
  sender: String,
  content: String,
  channel: {
    type: Schema.Types.ObjectId,
    ref: 'Channel',
  },
  created_at: Date,
});

export const Channel = mongoose.model('Channel', ChannelSchema);
export const Message = mongoose.model('Message', MessageSchema);
