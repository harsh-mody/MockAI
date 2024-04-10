### 1) To Set up the Client App (WhiteBoard App)

#### Step 1: Clone the repository

```bash
git clone https://github.com/harsh-mody/MockAI
```

#### Step 2: Navigate to the project directory

```bash
cd my-drawing-board
```

#### Step 3: Start the development server

```bash
npm run dev
```

#### Step 4: Open the app in your browser

Visit [http://localhost:3000](http://localhost:3000) to access the drawing board app.


### 2) To Setup Model (AI Model)

### Step 1: Navigate to model

```
cd model
```

### Step 2: Install the required packages

```
pip install -r requirements.txt
```

### Step 3: Run the main.py file

### Step 4: Open app in your browser

Visit http://127.0.0.1:9999 to access the AI model.

### Step 5: Go to the WhiteBoard App and Drawing Something

![Screenshot 2024-04-10 at 10 10 32 PM](https://github.com/harsh-mody/MockAI/assets/56110469/d56f44a6-2a91-4dcf-99fb-46ebc680221e)

### Step 6: Go to the AI model and upload this picture there

![Screenshot 2024-04-10 at 10 12 51 PM](https://github.com/harsh-mody/MockAI/assets/56110469/a4af878a-15df-4bf2-932c-5d34af9f8e02)

### Step 7: Click the Generate Description Button

![Screenshot 2024-04-10 at 10 14 02 PM](https://github.com/harsh-mody/MockAI/assets/56110469/4c333df9-9af4-4792-abc5-ad5c212fef98)

As we see from the sample, the model currently is not perfectly. It thinks there is a girl which is correct but there is no table. This is due to abstract nature of what I have drawn. But for simple drawings it should work better. This model can be improved gradually with time.

Regaurding Realtime description generator, we can try that in next version. Due to time constraints, this is what I was able to build. However, we can Record the Screen of PC and write code to send every 20 second snapshot and ask it to Generate Description. This would work very easily with same functionality. Regaurding using websockets and sending mouse clicks and live cursor pointer to model to generate description, Thats something I have thought about but I am not sure of how the mechanics of all would work. Would love to hear your suggestions.


