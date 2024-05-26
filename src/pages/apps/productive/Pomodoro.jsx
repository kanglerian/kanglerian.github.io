import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import PomodoroAnimation from '../../../assets/animations/pomodoro.json'
import ManImage from '../../../assets/images/man.png'
import BellAudio from '../../../assets/sounds/ok.mp3'

const Pomodoro = () => {
  const [timer, setTimer] = useState(1500);
  const [isPaused, setIsPaused] = useState(true);

  const bell = new Audio(BellAudio);

  const showNotification = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notifications");
    } else if (Notification.permission === "granted") {
      new Notification("Kanglerian Pomodoro!", {
        body: "Finished! Go rest time.",
        icon: ManImage
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          new Notification("Kanglerian Pomodoro!", {
            body: "Finished! Go rest time.",
            icon: ManImage
          });
        }
      });
    }
  };

  useEffect(() => {
    let intervalId;

    if (!isPaused && timer > 0) {
      intervalId = setInterval(() => {
        setTimer(prevTimer => prevTimer - 1);
      }, 1000);
    } else if (timer == 0) {
      showNotification();
      bell.play();
      setTimer(10);
      setIsPaused(true);
    }

    return () => clearInterval(intervalId);
  }, [timer, isPaused]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handlePauseToggle = () => {
    setIsPaused(prevPaused => !prevPaused);
  };

  return (
    <div className='flex flex-col justify-center items-center bg-red-800 h-screen'>
      <Link to={`/`} className='text-white hover:text-sky-300 space-x-2 text-sm'>
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <header className='text-center space-y-1 px-10'>
        <h2 className='font-bold text-2xl text-red-100'>Podomoro</h2>
        <p className='text-sm text-red-200'>Teknik manajemen waktu berfokus pada interval waktu dan istirahat.</p>
      </header>
      <div className='flex justify-end items-center'>
        <Lottie animationData={PomodoroAnimation} className='w-64 h-64' loop={true} />
      </div>
      <div className='flex flex-col justify-center items-center gap-5 mt-5'>
        <h2 className='text-red-100 text-2xl'>{formatTime(timer)}</h2>
        <button type="button" onClick={handlePauseToggle} className={`block text-red-100 ${isPaused ? 'bg-red-100 text-red-900' : 'bg-transparent'} hover:text-red-800 hover:bg-red-100 border border-red-100 h-12 w-12 space-x-1 rounded-full`}>
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-pause"></i>
        </button>
      </div>
      <footer className='absolute bottom-5'>
        <p className='text-xs text-red-300'>Created by <a href="https://instagram.com/kanglerian" target='_blank' className='underline'>@kanglerian</a> ☕️</p>
      </footer>
    </div>
  )
}

export default Pomodoro