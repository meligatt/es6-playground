// ****************************************
// Array.prototype.reduce()
// create a chart with a bar that counts instances of values
//  do not consider empty responses.
// ****************************************
const reduce004 = () => {
  const survey_responses = [
    {
      id:1,
      question_id: 1,
      respondent_id:1,
      response_content:'5'
    },
    {
      id:  6,
      question_id:  1,
      respondent_id:  2,
      response_content:  '4'
    },
    {
      id:  11,
      question_id:  1,
      respondent_id:  3,
      response_content:  '5'
    },
    {
      id:16,
      question_id:  1,
      respondent_id:  4,
      response_content:  '5'
    },
    {
      id:  21,
      question_id:  1,
      respondent_id:  5,
      response_content:  '4'
    },
    {
      id:  26,
      question_id:  1,
      respondent_id:  6,
      response_content:  ''
    }
  ];
  // filter out empty responses:
  const valid_survey_responses = survey_responses.filter((item) => item.response_content !== '' );
  // construct the object with keys
  const result = valid_survey_responses.reduce((chartObject, currentItem, currentIndex, array) => {
    const key = currentItem.response_content;
    if (key in chartObject){
      chartObject[key]++;
    } else {
      chartObject[key] = 1;
    }
    return chartObject;
  }, {});

  // const expected_for_chart = {
  //   '5': 3,
  //   '4': 2
  // };
  return result;
};
module.exports = reduce004;