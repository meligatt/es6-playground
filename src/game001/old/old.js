import '../css/game.scss';

// // initialState , thi sobject should be freeze.
// const initialState = {
//   // questions: [],
//   // questionIndexTracker: -1,
//   correct: 0,
//   wrong:0,
//   userAnswerTracker: [],
//   characterJourneyIndex: -1,
//   planetTotal: 6,
// }


// // ------------------------------------------------

// const $questionDiv = document.querySelector('.js-question');
// const $alternatives = document.querySelector('.js-alternatives');
// const $btnStart = document.querySelector('.js-btn-start');
// const $btnNext = document.querySelector('.js-btn-next');

// // ------------------------------------------------

// function QuestionsModule(){
//   let questions = [];
//   function fetchQuestions(){
//     const apiUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/289399/data.json";
//     return axios.get(apiUrl)
//       .then((response) => {
//       return response.data;
//     })
//   }
//   function setQuestions(data){
//     questions =  data;
//     return questions;
//   }
//   function getQuestions(){
//     return questions;
//   }
//   return {
//     fetchQuestions: fetchQuestions,
//     setQuestions: setQuestions,
//     getQuestions: getQuestions
//   }
// }

// // ------------------------------------------------

// function CounterModule(){
//   let questionIndexTracker = -1;
//   let correctCounter = 0;
//   let wrongCounter = 0;

//   function incrementQuestionIndexTracker(){
//     questionIndexTracker++;
//     return questionIndexTracker;
//   }

//   function incrementCorrectCounter(){
//     correctCounter++;
//     return correctCounter;
//   }

//   function incrementWrongCounter(){
//     wrongCounter++;
//     return wrongCounter;
//   }

//   function getQuestionIndexTracker(){
//     return questionIndexTracker;
//   }

//   function getWrongCounter(){
//     return wrongCounter;
//   }

//   function getCorrectCounter(){
//     return correctCounter;
//   }


//   return {
//     incrementQuestionIndexTracker: incrementQuestionIndexTracker,
//     incrementCorrectCounter: incrementCorrectCounter,
//     incrementWrongCounter: incrementWrongCounter,
//     getQuestionIndexTracker: getQuestionIndexTracker,
//     getWrongCounter: getWrongCounter,
//     getCorrectCounter: getCorrectCounter
//   }
// }

// // ------------------------------------------------

// /*
// function questionIndexTrackerOuter(){
//   let counter = initialState.questionIndexTracker;
//   return function Inner(){
//     fetchData()
//       .then((data) => {

//       console.log(data)
//         const $containerLevel1 = document.querySelector('.container--level-1');

//         $containerLevel1.setAttribute('style', 'display: block;');
//         $containerLevel1.classList.add('container--level-1--fade-in');

//         counter++;
//         console.log(counter);

//       })
//       .catch((error) => {
//         console.log ('error message: ', error.message);
//       });
//   }
// } */

// // ------------------------------------------------
// const counterModule = CounterModule();
// const questionsModule = QuestionsModule();
// // $btnStart.addEventListener('click', questionIndexTrackerOuter())

// // // refactor
// $btnStart.addEventListener('click', () => {
//     questionsModule.fetchQuestions()
//       .then((response) => {
//       questionsModule.setQuestions(response);

//       const $containerLevel0 = document.querySelector('.container--level-0');
//       $containerLevel0.classList.add('container--level-0--fade-out');

//     setTimeout(() => {
//           $containerLevel0.setAttribute('style', 'display:none');
//         }, 200);

//       const timerId = setInterval(() => {
//         if ($containerLevel0.style.display === 'none'){
//           const $containerLevel1 = document.querySelector('.container--level-1');
//           $containerLevel1.setAttribute('style', 'display: block;');
//           setTimeout(() => {
//             $containerLevel1.classList.add('container--level-1--fade-in');
//           }, 200);
//           clearInterval(timerId);
//           } else {
//             console.log($containerLevel0.style.display === 'none')
//           }
//       }, 200);



//       counterModule.incrementQuestionIndexTracker();

//       const questionsArray = questionsModule.getQuestions();
//       // renderScene(newState.characterJourneyIndex);
//       // renderQuestion($questionDiv, $alternatives, newState.questions[newState.questionIndexTracker]);
//     })
//     .catch((error) => {
//       console.log ('error message: ', error.message);
//   });
// } );

// // ------------------------------------------------

// $btnNext.addEventListener('click', () => {
//   // const counter = counterModule.incrementQuestionIndexTracker();
//   //  console.log('$btnNext', counter)

// //   const characterJourneyPosition = setCharacterJourney(state.characterJourneyPosition);
// //   const currentCharacterPosition = getCurrentCharacterPosition(characterJourneyPosition);
// //   state.questionIndexTracker = state.questionIndexTracker + 1;

// //   if(hasMissionFinished(characterJourneyArray) === false){
// //     if(state.questionIndexTracker <= (state.planetTotal - 1)){
// //       renderQuestion($questionDiv, $alternatives, state.questions[state.questionIndexTracker]);
// //       renderScene(characterJourneyArray);
// //      } else {
// //        console.log('💥💥you ran out of chances! 💥💥');
// //         $btnNext.disabled = true;
// //         $btnNext.className = 'btn-disabled';
// //      }

// //   } else {
// //     console.log('mission completed!! 🚀');
// //     $btnNext.disabled = true;
// //     $btnNext.className = 'btn-disabled';
// //     renderScene(characterJourneyArray);
// //   }


// });

// // ------------------------------------------------

// const hasMissionFinished = (characterJourneyArray) => {
//   const index = getCurrentCharacterPosition(characterJourneyArray);
//   if (index === (characterJourneyArray.length - 1) ){
//     return true;
//   }
//   return false;
// }

// // ------------------------------------------------
// const setCharacterJourney = (state) => {
//   const positionInJourney = state.correct;
//   return positionInJourney;
// }

// // ------------------------------------------------

// const getCurrentCharacterPosition = (characterJourneyArray) => {
//   const index = characterJourneyArray.findIndex((elem) => elem === 1 );
//   return index;
// }

// // ------------------------------------------------

// const renderScene = (characterJourneyArray) => {
//   // render planets according to characterJourney
//  const currentCharacterPosition = getCurrentCharacterPosition(characterJourneyArray);

//   const $scene = document.querySelector('.scene');
//   const $sceneStart = document.querySelector('.scene__start');
//   const $planets = document.querySelector('.planets');
//   const $character = document.createElement('div');
//   const $planetEnd = document.createElement('div');

//   $character.setAttribute('class', 'character-ahsoka');
//   $planetEnd.setAttribute('class', 'planet planet--end');

//   // clean scene
//   if($planets.hasChildNodes()){
//      while($planets.firstChild){
//       $planets.removeChild($planets.firstChild);
//      }
//   }

//   // append character outside a planet when caracter does not have position in array yet.
//   if(currentCharacterPosition === -1){
//     $sceneStart.appendChild($character);
//   } else {
//     $sceneStart.setAttribute('style', 'visibility:hidden');
//   }

//   // append planets
//   for (let i = 0; i < state.planetTotal; i++){
//     const $planet = document.createElement('div');
//     $planet.setAttribute('class', 'planet');

//     if((i+1) === (state.planetTotal)) {
//       $planets.appendChild($planetEnd);
//     } else {
//       $planets.appendChild($planet);
//     }

//     if(currentCharacterPosition === i ){
//       $planet.appendChild($character);
//     }
//    }

//   // render character when reached last planet
//   if(currentCharacterPosition === (state.planetTotal - 1)){
//     $planetEnd.appendChild($character);
//   }
// }


// // ------------------------------------------------

// const renderQuestion = ($questionDiv, $alternatives, item) => {
//   insertItemToDom($questionDiv, $alternatives, item);
// }

// // ------------------------------------------------

// const cleanTriviaForm = ($questionDiv, $alternatives) => {
//   if ($questionDiv.hasChildNodes()) {
//     const questionChildren = $questionDiv.childNodes;
//     for (let i = 0; i < questionChildren.length; i++) {
//       $questionDiv.removeChild(questionChildren[i]);
//     }
//   }
//   if($alternatives.hasChildNodes()){
//      while($alternatives.firstChild){
//         $alternatives.removeChild($alternatives.firstChild);
//      }
//   }
// }

// // ------------------------------------------------

//  // refactor
// const selectAlternativeHandler =  (event, currentQuestionId, alternativeSelectedId) => () => {
//     state.userAnswerTracker[currentQuestionId] = alternativeSelectedId;

//   // check if answer is correct or not to move fordward or backward
//     if(state.userAnswerTracker[currentQuestionId] === state.questions[currentQuestionId].correct) {
//       state.correct++;
//     }

//     // remove others
//       const $allAlternativeLi = document.querySelectorAll(".alternative--selected");
//       if ($allAlternativeLi.length > 0){
//         $allAlternativeLi.forEach((item) => {
//           item.classList.remove('alternative--selected');
//         })
//       }

//     // add class 'selected' to the alternative div
//     const $currentAlternativeSelected = document.querySelector(`.alternative-${alternativeSelectedId}`);
//     $currentAlternativeSelected.classList.add('alternative--selected');
//   };

// // ------------------------------------------------
// // refactor
// const insertItemToDom = ($questionDiv, $alternatives, item) => {
//   cleanTriviaForm($questionDiv, $alternatives);

//   // question
//   const $itemQuestion = document.createElement('p');
//   $itemQuestion.textContent = `${state.questionIndexTracker}) ${item.question}`;
//   $questionDiv.appendChild($itemQuestion);


//   // alternatives
//   item.alternatives.forEach((item, i) => {
//     const currentQuestionId = state.questionIndexTracker;
//     const $itemAlternative = document.createElement('li');
//     $itemAlternative.textContent = item;
//     $itemAlternative.setAttribute('id', currentQuestionId);
//     $itemAlternative.setAttribute('class', `alternative alternative-${i}`);
//     $alternatives.appendChild($itemAlternative);

//     const $currentAlternativeSelected = document.querySelector(`.alternative-${i}`);
//     const currentQuestionSelectedId  = $currentAlternativeSelected.id;
//     const alternativeSelectedId = i;

//     //create a closure on each iteration, so the conts passed are in the outer scope of the returned fn
//     $currentAlternativeSelected.addEventListener('click', selectAlternativeHandler(event, currentQuestionSelectedId, alternativeSelectedId));
//   });
// }

// // ------------------------------------------------

// // todo: Add CSS animation for character completes the mission.
// const animationMissionComplete = () => {
//   console.log('mission complete!');
// }