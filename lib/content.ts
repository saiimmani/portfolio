export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date?: string;
  tags?: string[];
  body: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "gesture-robot-mpu6050-zigbee",
    title: "Gesture control with MPU-6050 and Zigbee",
    summary:
      "Building a wireless robot that responds to hand orientation data from the MPU-6050 and sends commands over Zigbee.",
    date: "2025",
    tags: ["Embedded", "Robotics", "Zigbee", "MPU6050"],
    body:
      "Capturing real-time gesture data on an Arduino Nano with the MPU-6050, processing orientation, and transmitting commands to an Arduino Mega over Zigbee. The Mega drives motors through a motor driver, giving responsive motion. Current focus: reducing response time and stabilizing motion while keeping the architecture modular for new sensors."
  },
  {
    slug: "face-recognition-attendance",
    title: "Face recognition attendance with Python and OpenCV",
    summary:
      "Automating attendance with real-time face detection and recognition using Python, OpenCV, and the face recognition library.",
    tags: ["Computer Vision", "Python", "OpenCV"],
    body:
      "Built a Tkinter UI to register faces, mark attendance, and manage records with Pandas. The pipeline handles detection, recognition, and logging, improving efficiency and security for institutional check-ins."
  },
  {
    slug: "ai-fitness-tracker",
    title: "AI fitness tracking with Tkinter and regression",
    summary:
      "A desktop fitness tracker that manages profiles, calculates BMI, and predicts daily calorie burn with a linear regression model.",
    tags: ["Python", "Tkinter", "ML"],
    body:
      "The app secures user profiles, offers BMI-based health advice, logs calories, and personalizes workout plans. A Scikit-learn regression model uses historical activity data to estimate burn rates, keeping feedback loop tight for users."
  }
];
