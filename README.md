# Catflix - Netflix Clone

A full-stack Netflix clone built with Next.js 14, featuring modern authentication, video streaming, and a responsive UI.

## 🚀 Features

- **Authentication System**: Google OAuth and credential-based authentication
- **Protected Routes**: Secure access control for authenticated users
- **Favorites Management**: Add/remove movies to/from user's favorites list
- **Movie Previews**: Interactive movie information modals
- **Video Streaming**: HTTP Live Streaming (HLS) implementation
- **Video Transcoding**: FFmpeg integration for video processing
- **Responsive Design**: Modern UI with Tailwind CSS and Framer Motion

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS, ShadCN UI
- **Animations**: Framer Motion
- **State Management**: React Query, SWR
- **Authentication**: NextAuth.js
- **Database**: MongoDB with Mongoose
- **Video Processing**: FFmpeg
- **Video Streaming**: HLS (HTTP Live Streaming)

## 📊 Performance Highlights

- **User Management**: Efficiently handles over 500 user logins daily
- **Bandwidth Optimization**: 50% reduction in bandwidth usage through HLS implementation
- **Video Streaming**: 10-second video segments for optimal streaming performance
- **Asynchronous State**: Optimized data fetching with React Query and SWR

## 🎬 Screenshots

### Home Page
![Home Page](https://github.com/user-attachments/assets/abaf6b54-5fd3-4906-8033-041f05ad5db7)

### HTTP Live Streaming
The video is loaded in multiple segments (segment000.ts & segment001.ts) for optimal streaming performance.
![HLS Implementation](https://github.com/user-attachments/assets/17d32ed7-ec97-44a5-a16d-3549e1029e76)

### Authentication Pages
![Sign In](https://github.com/user-attachments/assets/7c1e4adf-b808-47f5-90df-ffe1df368aea)
![Sign Up](https://github.com/user-attachments/assets/346b3669-68a2-4361-9585-057269f35304)

### Interactive Features
Favorites management and movie previews with smooth animations.
![largeGif](https://github.com/user-attachments/assets/57179197-41b8-4dc7-b438-6adca175653f)

## 🔧 Key Implementations

### Authentication System
- Google OAuth integration
- Credential-based authentication
- Protected route middleware
- Session management

### Video Streaming Technology
- **HLS Implementation**: HTTP Live Streaming for efficient video delivery
- **FFmpeg Integration**: Video transcoding and processing
- **Segment-based Streaming**: 10-second video segments for optimal performance
- **Bandwidth Optimization**: 50% reduction in data usage

### State Management
- **React Query**: Server state management and caching
- **SWR**: Data fetching and synchronization
- **Optimistic Updates**: Real-time UI updates

### UI/UX Design
- **Responsive Design**: Mobile-first approach
- **Modern Animations**: Framer Motion integration
- **Component Library**: ShadCN UI components
- **Custom Styling**: Tailwind CSS for consistent design

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- MongoDB
- FFmpeg (for video processing)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/catflix.git
   cd catflix
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables:
   - Database connection string
   - Google OAuth credentials
   - NextAuth secret

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── app/                 # Next.js 14 app directory
├── components/          # React components
│   ├── ui/             # ShadCN UI components
│   └── client-side/    # Client-side components
├── actions/            # Server actions
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── models/             # Database models
└── auth/               # Authentication configuration
```

## 🔗 Related Projects

- **HLS Implementation**: [HTTP Live Streaming Repository](https://github.com/Ormon-huehuehue/HTTP-Live-Streaming-HLS-)


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Note**: This is a demonstration project and is not affiliated with Netflix.
