"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
// Quiz data structure with 40 questions
const quizData = [
  {
    id: 1,
    question: "Arrange the code to print 'Hello World'",
    blocks: [
      { id: 1, text: "def greet():", correctOrder: 0 },
      { id: 2, text: "    print('Hello World')", correctOrder: 1 },
      { id: 3, text: "greet()", correctOrder: 2 },
    ],
  },
  {
    id: 2,
    question: "Create a function that adds two numbers",
    blocks: [
      { id: 4, text: "def add(a, b):", correctOrder: 0 },
      { id: 5, text: "    return a + b", correctOrder: 1 },
      { id: 6, text: "result = add(5, 3)", correctOrder: 2 },
    ],
  },
  {
    id: 3,
    question: "Create a loop that prints numbers 1 to 5",
    blocks: [
      { id: 7, text: "for i in range(1, 6):", correctOrder: 0 },
      { id: 8, text: "    print(i)", correctOrder: 1 },
      { id: 9, text: "# End of loop", correctOrder: 2 },
    ],
  },
  {
    id: 4,
    question: "Define a list and print its length",
    blocks: [
      { id: 10, text: "numbers = [1, 2, 3, 4, 5]", correctOrder: 0 },
      { id: 11, text: "length = len(numbers)", correctOrder: 1 },
      { id: 12, text: "print(length)", correctOrder: 2 },
    ],
  },
  {
    id: 5,
    question: "Create a simple if-else statement",
    blocks: [
      { id: 13, text: "if x > 10:", correctOrder: 0 },
      { id: 14, text: "    print('Greater')", correctOrder: 1 },
      { id: 15, text: "else:", correctOrder: 2 },
      { id: 16, text: "    print('Lesser')", correctOrder: 3 },
    ],
  },
  // Add remaining questions here...
  {
    id: 40,
    question: "Write a function to check if a number is even",
    blocks: [
      { id: 117, text: "def is_even(num):", correctOrder: 0 },
      { id: 118, text: "    return num % 2 == 0", correctOrder: 1 },
      { id: 119, text: "result = is_even(4)", correctOrder: 2 },
      { id: 120, text: "print(result)", correctOrder: 3 },
    ],
  },
]

const DraggableBlock = ({ block, index, onDragStart, onDragOver, onDrop }) => {
  return (
    <motion.div
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={(e) => onDragOver(e, index)}
      onDrop={(e) => onDrop(e, index)}
      className="p-4 bg-purple-600 text-white rounded-md cursor-move transform transition-all duration-300 hover:scale-102 hover:bg-purple-700 shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {block.text}
    </motion.div>
  )
}

const QuizGame = () => {
  const [questionPool, setQuestionPool] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [blocks, setBlocks] = useState([])
  const [isCorrect, setIsCorrect] = useState(null)
  const [showAnimation, setShowAnimation] = useState(false)
  const [draggedItem, setDraggedItem] = useState(null)
  const [questionsCompleted, setQuestionsCompleted] = useState(0)

  useEffect(() => {
    initializeQuestionPool()
  }, [])

  const initializeQuestionPool = () => {
    const shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5)
    setQuestionPool(shuffledQuestions)
    loadNextQuestion(shuffledQuestions)
  }

  const loadNextQuestion = (currentPool = questionPool) => {
    if (currentPool.length === 0) {
      // Reset pool when all questions are used
      const newPool = [...quizData].sort(() => Math.random() - 0.5)
      setQuestionPool(newPool)
      setCurrentQuestion(newPool[0])
      setBlocks([...newPool[0].blocks].sort(() => Math.random() - 0.5))
    } else {
      setCurrentQuestion(currentPool[0])
      setBlocks([...currentPool[0].blocks].sort(() => Math.random() - 0.5))
    }
    setIsCorrect(null)
    setShowAnimation(false)
  }

  const handleDragStart = (e, index) => {
    setDraggedItem(index)
    e.target.classList.add("opacity-50")
  }

  const handleDragEnd = (e) => {
    e.target.classList.remove("opacity-50")
  }

  const handleDragOver = (e, index) => {
    e.preventDefault()
  }

  const handleDrop = (e, dropIndex) => {
    e.preventDefault()

    if (draggedItem === null) return

    const updatedBlocks = [...blocks]
    const [movedBlock] = updatedBlocks.splice(draggedItem, 1)
    updatedBlocks.splice(dropIndex, 0, movedBlock)

    setBlocks(updatedBlocks)
    setDraggedItem(null)
  }

  const checkAnswer = () => {
    const correct = blocks.every((block, index) => block.correctOrder === index)
    setIsCorrect(correct)
    setShowAnimation(true)

    if (correct) {
      setQuestionsCompleted((prev) => prev + 1)
      setTimeout(() => {
        const newPool = questionPool.slice(1)
        setQuestionPool(newPool)
        loadNextQuestion(newPool)
      }, 1500)
    }
  }

  const skipQuestion = () => {
    const newPool = questionPool.slice(1)
    setQuestionPool(newPool)
    loadNextQuestion(newPool)
  }

  if (!currentQuestion) return <div>Loading...</div>

  return (
    <div
      className={`p-6 bg-gray-900 rounded-lg shadow-xl max-w-md mx-auto transform transition-all duration-500 ${
        showAnimation && isCorrect ? "scale-105 bg-green-900" : ""
      } ${showAnimation && !isCorrect ? "shake bg-red-900" : ""}`}
    >
      <h2 className="text-2xl font-bold text-purple-300 mb-4">
        Question {(questionsCompleted % quizData.length) + 1} of {quizData.length}
      </h2>
      <p className="text-sm text-purple-400 mb-2">Total Completed: {questionsCompleted}</p>
      <p className="text-purple-400 mb-6">{currentQuestion.question}</p>

      <div className="flex flex-col gap-3 p-4 bg-purple-900 rounded-lg">
        {blocks.map((block, index) => (
          <DraggableBlock
            key={block.id}
            block={block}
            index={index}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        ))}
      </div>

      <div className="mt-6 flex gap-4 justify-center">
        <button
          onClick={checkAnswer}
          className="px-6 py-2 bg-green-500 rounded-lg text-white font-semibold hover:bg-green-600 transition-colors duration-300"
        >
          Check Answer
        </button>
        <button
          onClick={skipQuestion}
          className="px-6 py-2 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 transition-colors duration-300"
        >
          Skip Question
        </button>
      </div>

      {showAnimation && (
        <div
          className={`mt-4 text-lg font-semibold transition-all duration-500 ${
            isCorrect ? "text-green-400" : "text-red-400"
          }`}
        >
          {isCorrect ? "✨ Correct! Great job!" : "❌ Try again!"}
        </div>
      )}
    </div>
  )
}

export default QuizGame

