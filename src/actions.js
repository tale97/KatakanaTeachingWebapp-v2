import { USER_INPUT } from "./constants.js";

export const typeAnswer = (text) => {
  return {
    type: USER_INPUT,
    payload: text,
  };
};

export const pressSpace = (context) => {
  switch (context) {
    case "REQUEST_HINT":
      return {
        type: "SPACE_PRESS_FOR_HINT",
        time: Date.now(),
      };
    case "CONTINUE_AFTER_ERROR":
      return {
        type: "SPACE_PRESS_TO_CONTINUE",
        time: Date.now(),
      };
    case "CONTINUE_AFTER_COMPLETE":
      return {
        type: "SPACE_PRESS_TO_GO_NEXT",
        time: Date.now(),
      };
    default:
      return {
        type: "SPACE_PRESS",
      };
  }
};

export const updateChar = (japchar, romaji) => {
  return {
    type: "CHAR_UPDATE",
    currentJapChar: japchar,
    currentRomaji: romaji,
  };
};

export const pressEnter = (time) => {
  return {
    type: "ENTER_PRESS",
    time: time,
  };
};

export const typeWrongAnswer = (userChar, currentChar) => {
  return {
    type: "WRONG_INPUT",
    userInput: userChar,
    currentChar: currentChar,
    time: Date.now(),
  };
};

export const completeWord = () => {
  return {
    type: "COMPLETE_WORD",
    time: Date.now(), // when user complete last character Card
  };
};

export const updateWord = (word, romajiList) => {
  const cardStateList = romajiList.map((item) => "");
  return {
    type: "UPDATE_WORD",
    payload: word,
    romajiList: romajiList,
    cardStateList: cardStateList,
  };
};

export const completeChar = (timestamp, completionType) => {
  return {
    type: "COMPLETE_CHAR",
    time: timestamp,
    completionType: completionType,
  };
};

export const setNewWordTime = (time) => {
  return {
    type: "SET_NEW_WORD_TIME",
    time: time,
  };
};

export const onAudioPlay = () => {
  return {
    type: "PLAY_AUDIO",
  };
};

export const onAudioPause = () => {
  return {
    type: "PAUSE_AUDIO",
  };
};

export const pressKey = (key) => {
  return {
    type: "PRESS_KEY",
    payload: key,
  };
};

export const onCorrectChar = () => {
  return {
    type: "INPUT_CORRECT_CHAR",
  };
};

export const onIncorrectChar = () => {
  return {
    type: "INPUT_INCORRECT_CHAR",
  };
};

export const resetStore = () => {
  return {
    type: "RESET_STORE",
  };
};

export const alertRomajiNotInDict = () => {
  return {
    type: "ALERT_NOT_IN_DICT",
  };
};

export const resetRomajiNotInDictAlert = () => {
  return {
    type: "RESET_NOT_IN_DICT_ALERT",
  };
};

export const loadUserToStore = (userInfo) => {
  return {
    type: "LOAD_USER",
    payload: userInfo,
  }
}
