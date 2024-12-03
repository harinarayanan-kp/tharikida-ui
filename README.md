# Tharikida UI 🚀🔥

## A Neo-Brutalist React Library for Bold, Fast UIs

Tharikida UI brings a bold neo-brutalist design to your React projects—raw, vibrant, and modern. With a built-in ThemeProvider, you can easily customize colors, spacing, and more to match your unique style. Build fast, stylish apps with a touch of Kerala flair!

---
(WORK IN PROGRES)
  :-)

![image](https://github.com/user-attachments/assets/a6d99e38-6668-44f4-8df5-7ed05c1e0be5)


## Features
- 🥥 **Naadan Design:** A clean, minimalistic design inspired by Kerala's vibrant yet simple aesthetic.  
- ⚡ **Fast and Lightweight:** Optimized for performance with minimal dependencies.  
- 🛠️ **Customizable:** Easy-to-use components with built-in theming support.  
- 🌴 **Ready to Use:** A growing list of pre-built, accessible components to enhance your UI.  

---

## Installation

You can easily add **Tharikida UI** to your React project via npm or yarn:

### Using npm:
```bash
npm install tharikida-ui
```
## Usage:
Once installed, you can start using Tharikida UI components in your React project.

Example:

```tsx
<Button type="secondary">Secondary</Button>
<Button type="primary">Primary</Button>
<ThemeProvider
  primaryColor="green"
  backgroundColor="yellow"
  spacingfactor={8}>
        <div>
          <Button type="secondary">Secondary</Button>
          <Button type="primary">Primary</Button>
        </div>
        <MusicPlayer
          musicUrl="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          currentPosition={50}
          images={[
            "https://cdn.pixabay.com/photo/2024/11/13/08/47/city-9193823_1280.jpg",
            "https://cdn.pixabay.com/photo/2023/06/28/11/25/man-8094211_960_720.jpg",
          ]}
          musicName="FE!N"
          artist="Travis Scott"
        />
</ThemeProvider>
<Star size={40} />
```
## Components:
Tharikida UI includes the following components:

Button: Customizable buttons with various styles.

Customization
Tharikida UI is built to be flexible! You can easily customize the look and feel of components through props and CSS overrides.

Here’s an example of customizing the primary button color:

```jsx
<Button style={{ backgroundColor: '#F1C40F' }} type="primary">
  Custom Button
</Button>
```
For more advanced theming and customization options, refer to the documentation.
