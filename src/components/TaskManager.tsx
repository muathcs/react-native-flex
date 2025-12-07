/**
 * INTERVIEW CHALLENGE: Drag-and-Drop Task Board (Kanban Style)
 *
 * Create a task management board with:
 * 1. Three columns: Pending, In Progress, Completed
 * 2. Add new tasks that appear in Pending by default
 * 3. Drag tasks between columns to update their status
 * 4. Double-click any task to delete it
 * 5. Show task count for each column
 *
 * Requirements:
 * - Implement drag-and-drop using HTML5 Drag API
 * - Track dragged item and drop target
 * - Visual feedback during drag (opacity, background color)
 * - Handle onDragStart, onDragOver, onDrop events
 * - Update task status based on drop location
 * - Support keyboard input (Enter to add task)
 * - Style with Notion-inspired minimal design
 */

import React, { useState } from "react";

interface Task {
  task: string;
  completed: boolean;
  inProgress: boolean;
  id: string;
}

function TaskManager() {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [task, setTask] = useState<string>("");
  const [draggedItem, setDraggedItem] = useState<Task | undefined>(undefined);
  const [isDraggingOver, setIsDraggingOver] = useState<
    "on-todo" | "on-progress" | "on-completed" | null
  >(null);

  function handleAddTask(): void {
    if (!task) return;
    setAllTasks([
      ...allTasks,
      {
        task: task,
        completed: false,
        inProgress: false,
        id: crypto.randomUUID(),
      },
    ]);
    setTask("");
  }

  function handleOnDrop(section: "on-todo" | "on-progress" | "on-completed") {
    const completed = section === "on-completed";
    const inProgress = section === "on-progress";
    setAllTasks(
      allTasks.map((task) => {
        if (draggedItem && task.id === draggedItem.id) {
          return { ...task, completed, inProgress };
        }
        return task;
      })
    );
    setDraggedItem(undefined);
    setIsDraggingOver(null);
  }

  function handleDelete(id: string) {
    const tempArr = [...allTasks].filter((tsk) => tsk.id !== id);
    setAllTasks(tempArr);
  }

  return (
    <div className="min-h-screen bg-[#ffffff] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#37352f] mb-12 tracking-tight">
          🎯 Task Manager
        </h1>

        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 w-full">
              <input
                value={task}
                onChange={(e) => {
                  setTask(e.target.value);
                }}
                id="task-input"
                placeholder="Type '/' for commands..."
                className="w-full px-4 py-3 text-lg bg-transparent border-none focus:ring-0 placeholder-gray-400"
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleAddTask();
                }}
              />
            </div>
            <button
              onClick={handleAddTask}
              className="w-full md:w-auto px-6 py-2 bg-[#2eaadc] hover:bg-[#2e95dc] text-white text-sm font-medium rounded-md transition-all duration-200"
            >
              Add Task
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* To-do */}
          <div
            className={`bg-[#ffffff] rounded-lg min-h-[600px] ${
              isDraggingOver === "on-todo" ? "bg-[#f5f5f5]" : ""
            } transition-all duration-300`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDraggingOver("on-todo");
            }}
            onDragLeave={() => setIsDraggingOver(null)}
            onDrop={(e) => {
              e.preventDefault();
              handleOnDrop("on-todo");
            }}
          >
            <h2 className="text-lg font-medium text-[#37352f] mb-4 flex items-center gap-2">
              📋 Pending
              <span className="text-xs font-normal text-gray-500">
                {
                  allTasks.filter((task) => !task.completed && !task.inProgress)
                    .length
                }
              </span>
            </h2>
            <ul className="space-y-2">
              {allTasks
                .filter((task) => !task.completed && !task.inProgress)
                .map((task) => (
                  <li
                    key={task.id}
                    onDragOver={(e) => {
                      e.preventDefault();
                    }}
                    onDragStart={() => setDraggedItem(task)}
                    onDragEnd={() => {
                      setDraggedItem(undefined);
                      setIsDraggingOver(null);
                    }}
                    draggable="true"
                    onDoubleClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDelete(task.id);
                    }}
                    className={`p-3 rounded hover:bg-[#f5f5f5] ${
                      draggedItem?.id === task.id ? "opacity-50" : ""
                    } transition-all duration-200 cursor-move select-none group`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex-1 text-[#37352f]">{task.task}</span>
                      <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100">
                        Double click to delete
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          {/* In Progress */}
          <div
            className={`bg-[#ffffff] rounded-lg min-h-[600px] ${
              isDraggingOver === "on-progress" ? "bg-[#f5f5f5]" : ""
            } transition-all duration-300`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDraggingOver("on-progress");
            }}
            onDragLeave={() => setIsDraggingOver(null)}
            onDrop={(e) => {
              e.preventDefault();
              handleOnDrop("on-progress");
            }}
          >
            <h2 className="text-lg font-medium text-[#37352f] mb-4 flex items-center gap-2">
              ⏳ In Progress
              <span className="text-xs font-normal text-gray-500">
                {allTasks.filter((task) => task.inProgress).length}
              </span>
            </h2>
            <ul className="space-y-2">
              {allTasks
                .filter((task) => task.inProgress)
                .map((task) => (
                  <li
                    key={task.id}
                    onDragOver={(e) => {
                      e.preventDefault();
                    }}
                    onDragStart={() => setDraggedItem(task)}
                    onDragEnd={() => {
                      setDraggedItem(undefined);
                      setIsDraggingOver(null);
                    }}
                    draggable="true"
                    onDoubleClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDelete(task.id);
                    }}
                    className={`p-3 rounded hover:bg-[#f5f5f5] ${
                      draggedItem?.id === task.id ? "opacity-50" : ""
                    } transition-all duration-200 cursor-move select-none group`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex-1 text-[#d9730d]">{task.task}</span>
                      <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100">
                        Double click to delete
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          {/* Completed */}
          <div
            className={`bg-[#ffffff] rounded-lg min-h-[600px] ${
              isDraggingOver === "on-completed" ? "bg-[#f5f5f5]" : ""
            } transition-all duration-300`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDraggingOver("on-completed");
            }}
            onDragLeave={() => setIsDraggingOver(null)}
            onDrop={(e) => {
              e.preventDefault();
              handleOnDrop("on-completed");
            }}
          >
            <h2 className="text-lg font-medium text-[#37352f] mb-4 flex items-center gap-2">
              ✅ Completed
              <span className="text-xs font-normal text-gray-500">
                {allTasks.filter((task) => task.completed).length}
              </span>
            </h2>
            <ul className="space-y-2">
              {allTasks
                .filter((task) => task.completed)
                .map((task) => (
                  <li
                    key={task.id}
                    onDragOver={(e) => {
                      e.preventDefault();
                    }}
                    onDragStart={() => setDraggedItem(task)}
                    onDragEnd={() => {
                      setDraggedItem(undefined);
                      setIsDraggingOver(null);
                    }}
                    draggable="true"
                    onDoubleClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleDelete(task.id);
                    }}
                    className={`p-3 rounded hover:bg-[#f5f5f5] ${
                      draggedItem?.id === task.id ? "opacity-50" : ""
                    } transition-all duration-200 cursor-move select-none group`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex-1 line-through text-gray-400">
                        {task.task}
                      </span>
                      <span className="text-xs text-gray-400 opacity-0 group-hover:opacity-100">
                        Double click to delete
                      </span>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
