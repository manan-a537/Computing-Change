import { Layout } from "@/components/layout/Layout";
import { Gamepad2, ArrowLeft, CheckCircle, XCircle, Trophy, Lock, Unlock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Puzzle {
  id: number;
  question: string;
  hint: string;
  answer: string;
  type: string;
}

const puzzles: Puzzle[] = [
  {
    id: 1,
    question: "Which of these numbers is ODD? Enter the number: 12, 7, 8, 4",
    hint: "An odd number cannot be divided evenly by 2",
    answer: "7",
    type: "Even/Odd"
  },
  {
    id: 2,
    question: "Solve for x: x + 5 = 12",
    hint: "Subtract 5 from both sides",
    answer: "7",
    type: "Equation"
  },
  {
    id: 3,
    question: "What is 15 ÷ 3 + 2 × 4?",
    hint: "Remember BODMAS: Division and Multiplication before Addition",
    answer: "13",
    type: "BODMAS"
  }
];

const DigitalGame = () => {
  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [completed, setCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const handleSubmit = () => {
    const isCorrect = userAnswer.trim().toLowerCase() === puzzles[currentPuzzle].answer.toLowerCase();
    
    if (isCorrect) {
      setFeedback("correct");
      setTimeout(() => {
        if (currentPuzzle < puzzles.length - 1) {
          setCurrentPuzzle(prev => prev + 1);
          setUserAnswer("");
          setFeedback(null);
          setShowHint(false);
        } else {
          setCompleted(true);
        }
      }, 1500);
    } else {
      setFeedback("incorrect");
      setTimeout(() => setFeedback(null), 2000);
    }
  };

  const resetGame = () => {
    setCurrentPuzzle(0);
    setUserAnswer("");
    setFeedback(null);
    setCompleted(false);
    setShowHint(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-section">
        <div className="page-container py-12 sm:py-16">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Gamepad2 className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">Interactive Game</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 max-w-3xl">
            Digital Escape Room
          </h1>
          
          <p className="text-muted-foreground max-w-2xl">
            Test your mathematical skills to escape! Solve each puzzle correctly to unlock the next challenge.
          </p>
        </div>
      </section>

      {/* Game Section */}
      <section className="page-container py-12 sm:py-16">
        <div className="max-w-2xl mx-auto">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {puzzles.map((puzzle, index) => (
              <div
                key={puzzle.id}
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                  index < currentPuzzle || completed
                    ? "bg-primary border-primary text-primary-foreground"
                    : index === currentPuzzle && !completed
                    ? "border-primary text-primary bg-primary/10"
                    : "border-muted-foreground/30 text-muted-foreground"
                }`}
              >
                {index < currentPuzzle || completed ? (
                  <Unlock className="h-4 w-4" />
                ) : index === currentPuzzle ? (
                  <span className="text-sm font-bold">{index + 1}</span>
                ) : (
                  <Lock className="h-4 w-4" />
                )}
              </div>
            ))}
          </div>

          {!completed ? (
            <div className="card-base">
              {/* Puzzle Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  Puzzle {currentPuzzle + 1} of {puzzles.length}
                </span>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  {puzzles[currentPuzzle].type}
                </span>
              </div>

              {/* Question */}
              <h2 className="text-xl sm:text-2xl font-bold mb-6">
                {puzzles[currentPuzzle].question}
              </h2>

              {/* Answer Input */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Input
                    type="text"
                    placeholder="Enter your answer..."
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                    className="flex-1 text-lg"
                    disabled={feedback === "correct"}
                  />
                  <Button 
                    onClick={handleSubmit} 
                    disabled={!userAnswer.trim() || feedback === "correct"}
                    className="px-6"
                  >
                    Submit
                  </Button>
                </div>

                {/* Hint Button */}
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {showHint ? "Hide hint" : "Need a hint?"}
                </button>

                {showHint && (
                  <div className="p-3 rounded-lg bg-muted/50 text-sm text-muted-foreground animate-fade-in">
                    💡 {puzzles[currentPuzzle].hint}
                  </div>
                )}

                {/* Feedback */}
                {feedback && (
                  <div
                    className={`flex items-center gap-2 p-4 rounded-lg animate-fade-in ${
                      feedback === "correct"
                        ? "bg-green-500/10 text-green-600"
                        : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {feedback === "correct" ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">Correct! Unlocking next puzzle...</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5" />
                        <span className="font-medium">Incorrect. Try again!</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Success Screen */
            <div className="card-base text-center animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-10 w-10" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                You Escaped! 🎉
              </h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Congratulations! You've successfully solved all the puzzles and escaped the digital room. 
                Your mathematical skills are impressive!
              </p>
              <Button onClick={resetGame} variant="outline" size="lg">
                Play Again
              </Button>
            </div>
          )}

          {/* Game Description */}
          <div className="mt-12 card-base bg-muted/30">
            <h3 className="font-semibold mb-3">About This Game</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Designed a simple digital escape room game using mathematical concepts to develop 
              logical reasoning skills. This interactive experience demonstrates how basic programming 
              concepts like conditional logic and user input validation can create engaging educational content.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalGame;
