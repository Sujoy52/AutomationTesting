$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/SUJOY/workspace/FreeCRM/src/main/java/com/crm/qa/features/LoginFreeCRM.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login",
  "description": "",
  "id": "free-crm-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User can login into Free CRM using valid credential",
  "description": "",
  "id": "free-crm-login;user-can-login-into-free-crm-using-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user standing into login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "for successful search enter user details as \"\u003cuseremail\u003e\" and \"\u003cuserpw\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user successfully Login into Home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "free-crm-login;user-can-login-into-free-crm-using-valid-credential;",
  "rows": [
    {
      "cells": [
        "useremail",
        "userpw"
      ],
      "line": 11,
      "id": "free-crm-login;user-can-login-into-free-crm-using-valid-credential;;1"
    },
    {
      "cells": [
        "nivmother@gmail.com",
        "Test@123"
      ],
      "line": 12,
      "id": "free-crm-login;user-can-login-into-free-crm-using-valid-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 53034456634,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User can login into Free CRM using valid credential",
  "description": "",
  "id": "free-crm-login;user-can-login-into-free-crm-using-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user standing into login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "for successful search enter user details as \"nivmother@gmail.com\" and \"Test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user successfully Login into Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepLogin.user_standing_into_login_page()"
});
formatter.result({
  "duration": 34985793479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nivmother@gmail.com",
      "offset": 45
    },
    {
      "val": "Test@123",
      "offset": 71
    }
  ],
  "location": "StepLogin.for_successful_search_enter_user_details_as_and(String,String)"
});
formatter.result({
  "duration": 7749486959,
  "status": "passed"
});
formatter.match({
  "location": "StepLogin.user_successfully_Login_into_Home_page()"
});
formatter.result({
  "duration": 40211458,
  "status": "passed"
});
formatter.after({
  "duration": 3279288093,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "User can\u0027t login into Free CRM using invalid credential",
  "description": "",
  "id": "free-crm-login;user-can\u0027t-login-into-free-crm-using-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user standing into login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "for unsuccessful search enter user details as \"\u003cuseremail\u003e\" and \"\u003cuserpw\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user remain in Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User received error message as Something went Wrong and \"\u003cmassage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "free-crm-login;user-can\u0027t-login-into-free-crm-using-invalid-credential;",
  "rows": [
    {
      "cells": [
        "useremail",
        "userpw",
        "massage"
      ],
      "line": 23,
      "id": "free-crm-login;user-can\u0027t-login-into-free-crm-using-invalid-credential;;1"
    },
    {
      "cells": [
        "nivmother@gmail.com",
        "Test@12",
        "Invalid login"
      ],
      "line": 24,
      "id": "free-crm-login;user-can\u0027t-login-into-free-crm-using-invalid-credential;;2"
    },
    {
      "cells": [
        "nivmother@gmail.com",
        "",
        "Invalid request"
      ],
      "line": 25,
      "id": "free-crm-login;user-can\u0027t-login-into-free-crm-using-invalid-credential;;3"
    },
    {
      "cells": [
        "",
        "Test@12",
        "Invalid request"
      ],
      "line": 26,
      "id": "free-crm-login;user-can\u0027t-login-into-free-crm-using-invalid-credential;;4"
    },
    {
      "cells": [
        "",
        "",
        "Invalid request"
      ],
      "line": 27,
      "id": "free-crm-login;user-can\u0027t-login-into-free-crm-using-invalid-credential;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 29492745124,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User can\u0027t login into Free CRM using invalid credential",
  "description": "",
  "id": "free-crm-login;user-can\u0027t-login-into-free-crm-using-invalid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user standing into login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "for unsuccessful search enter user details as \"nivmother@gmail.com\" and \"Test@12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user remain in Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User received error message as Something went Wrong and \"Invalid login\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepLogin.user_standing_into_login_page()"
});
formatter.result({
  "duration": 31028747995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nivmother@gmail.com",
      "offset": 47
    },
    {
      "val": "Test@12",
      "offset": 73
    }
  ],
  "location": "StepLogin.enter_user_details_as(String,String)"
});
formatter.result({
  "duration": 7655061385,
  "status": "passed"
});
formatter.match({
  "location": "StepLogin.user_remain_in_Login_page()"
});
formatter.result({
  "duration": 73708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid login",
      "offset": 57
    }
  ],
  "location": "StepLogin.user_received_an_error(String)"
});
formatter.result({
  "duration": 1752174970,
  "status": "passed"
});
formatter.after({
  "duration": 1694420069,
  "status": "passed"
});
formatter.before({
  "duration": 16284319365,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User can\u0027t login into Free CRM using invalid credential",
  "description": "",
  "id": "free-crm-login;user-can\u0027t-login-into-free-crm-using-invalid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user standing into login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "for unsuccessful search enter user details as \"nivmother@gmail.com\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user remain in Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User received error message as Something went Wrong and \"Invalid request\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepLogin.user_standing_into_login_page()"
});
formatter.result({
  "duration": 35937411626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nivmother@gmail.com",
      "offset": 47
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "StepLogin.enter_user_details_as(String,String)"
});
formatter.result({
  "duration": 9795356208,
  "status": "passed"
});
formatter.match({
  "location": "StepLogin.user_remain_in_Login_page()"
});
formatter.result({
  "duration": 52716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid request",
      "offset": 57
    }
  ],
  "location": "StepLogin.user_received_an_error(String)"
});
formatter.result({
  "duration": 135065752,
  "status": "passed"
});
formatter.after({
  "duration": 1112447652,
  "status": "passed"
});
formatter.before({
  "duration": 15559692068,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User can\u0027t login into Free CRM using invalid credential",
  "description": "",
  "id": "free-crm-login;user-can\u0027t-login-into-free-crm-using-invalid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user standing into login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "for unsuccessful search enter user details as \"\" and \"Test@12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user remain in Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User received error message as Something went Wrong and \"Invalid request\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepLogin.user_standing_into_login_page()"
});
formatter.result({
  "duration": 28034923140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 47
    },
    {
      "val": "Test@12",
      "offset": 54
    }
  ],
  "location": "StepLogin.enter_user_details_as(String,String)"
});
formatter.result({
  "duration": 6376947956,
  "status": "passed"
});
formatter.match({
  "location": "StepLogin.user_remain_in_Login_page()"
});
formatter.result({
  "duration": 55048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid request",
      "offset": 57
    }
  ],
  "location": "StepLogin.user_received_an_error(String)"
});
formatter.result({
  "duration": 252015658,
  "status": "passed"
});
formatter.after({
  "duration": 1190262331,
  "status": "passed"
});
formatter.before({
  "duration": 13445801978,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User can\u0027t login into Free CRM using invalid credential",
  "description": "",
  "id": "free-crm-login;user-can\u0027t-login-into-free-crm-using-invalid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user standing into login page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "for unsuccessful search enter user details as \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user remain in Login page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "User received error message as Something went Wrong and \"Invalid request\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "StepLogin.user_standing_into_login_page()"
});
formatter.result({
  "duration": 35253229041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 47
    },
    {
      "val": "",
      "offset": 54
    }
  ],
  "location": "StepLogin.enter_user_details_as(String,String)"
});
formatter.result({
  "duration": 8471662298,
  "status": "passed"
});
formatter.match({
  "location": "StepLogin.user_remain_in_Login_page()"
});
formatter.result({
  "duration": 47117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid request",
      "offset": 57
    }
  ],
  "location": "StepLogin.user_received_an_error(String)"
});
formatter.result({
  "duration": 201002243,
  "status": "passed"
});
formatter.after({
  "duration": 1150367163,
  "status": "passed"
});
});