report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Stopwatch_started.png",
        "test": "../bitmaps_test/20241112-214339/Stopwatch_started.png",
        "selector": "body",
        "fileName": "Stopwatch_started.png",
        "label": "Stopwatch started",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.17445882161458331,
          "misMatchPercentage": "0.17",
          "analysisTime": 20
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Stopwatch_before_one_circle.png",
        "test": "../bitmaps_test/20241112-214339/Stopwatch_before_one_circle.png",
        "selector": "body",
        "fileName": "Stopwatch_before_one_circle.png",
        "label": "Stopwatch before one circle",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.5130767822265625,
          "misMatchPercentage": "0.51",
          "analysisTime": 17
        },
        "diffImage": "../bitmaps_test/20241112-214339/failed_diff_Stopwatch_before_one_circle.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Stopwatch_after_one_circle.png",
        "test": "../bitmaps_test/20241112-214339/Stopwatch_after_one_circle.png",
        "selector": "body",
        "fileName": "Stopwatch_after_one_circle.png",
        "label": "Stopwatch after one circle",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.4,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/stopwatch/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 0.34586588541666663,
          "misMatchPercentage": "0.35",
          "analysisTime": 18
        }
      },
      "status": "pass"
    }
  ]
});