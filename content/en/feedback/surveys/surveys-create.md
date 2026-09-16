---
title: Creating and Configuring a Survey
description: Creating a survey, configuring questions, screens, transition conditions and appearance.
summary: Survey builder
order: 2
updatedAt: 2026-08-24
---

The builder allows you to assemble a survey from pages and questions, configure the completion scenario and design the form for the respondent.

To create a draft, you must fill in the required fields of the basic information and add **at least one question**.

## Creating a Survey

1. Open the **Surveys** section.
2. Click `Create`.
3. On the **Details** step, specify the name and location.
4. On the **Questions** step, configure the survey structure.
5. If necessary, configure transitions between survey stages on the **Conditions** step.
6. If necessary, change the appearance on the **Design** step.
7. Click `Create` on the last step.

After a successful save, the system will create a survey with the status `Draft`. The **Distribution** section will become available on the survey page, and the `Save` button will replace the `Create` button.


## Step 1. Details

<!-- ![responses](/ru/images/surveys/surveys/survey-create1.png) -->

[[delimiter rows=1]]

- **Name**
- **Location**

## Step 2. Questions

At this step, the survey structure is formed. You can add, delete and duplicate pages and questions, as well as change their order.

<!-- ![responses](/ru/images/surveys/surveys/survey-create2.png) -->

[[delimiter rows=1]]

### Page Types

- **Page with questions**

Use a page with questions to collect answers. One page can contain one or more questions, and all its content is displayed to the respondent at once.

- **Start screen**

The start screen is displayed before the questions and there can only be one. It can be used for a welcome message, explaining the purpose of the survey, or obtaining consent for the processing of personal data.

On the start screen, you can add text and variables, add an image, enable consent for the processing of personal data, and add the ability to unsubscribe from survey mailings.

- **Information screen**

An information screen can be placed between pages with questions. It does not require a response and is suitable for instructions, explanations or visual inserts.

You can add text, variables and an image to the screen.

- **Final screen**

The final screen completes the completion scenario. A survey can have several final screens, for example for different branches of the scenario.

On the final screen, you can add text, variables, an image and the ability to unsubscribe from survey mailings.

[[info type=custom color=#E06823]]
If a survey has several final screens and transition conditions are not configured, the respondent is shown the first final screen in order.
[[/info]]

#### Consent for Processing of Personal Data

This setting is only available on the start screen.

1. Enable `Consent to continue`.
2. Specify a link to the privacy policy.
3. Save the changes.

The respondent will see a required consent checkbox. Until the checkbox is checked, the `Start` button will be unavailable.

#### Unsubscribing from Survey Mailings

This setting can be added to the start or final screen.

After confirming the unsubscription, the guest is excluded from further survey mailings. For respondents who opened the survey via an anonymous link, this block is not displayed.

[[info type=custom color=#E06823]]
If the survey is opened via a public anonymous link, personal variables are not displayed.
[[/info]]

You can add and manage the order of survey pages at the top of the form. Click on the 2 dots on the page type, or drag manually by holding the 6 dots on the page type.

<!-- [[gallery gap=12 layout=carousel]]
![responses](/ru/images/surveys/surveys/survey-create3.png)
![responses](/ru/images/surveys/surveys/survey-create4.png)
[[/gallery]] -->

### General Question Settings

The following basic parameters are available for questions:

- **Question type** — determines the answer format: `Rating`, `NPS`, `Choice` or `Input`.
- **Required** — if enabled, the respondent will not be able to continue or submit the survey without an answer. This setting is enabled by default.
- **Question text** — a required field of up to 250 characters.
- **Explanation** — additional text under the question of up to 250 characters.

#### Rating

The **Rating** type is used for a quantitative assessment of the visit, service or another indicator.

<!-- ![responses](/ru/images/surveys/surveys/survey-create5.png) -->

[[delimiter rows=1]]

**Available settings:**

- **Display type** — `Stars` or `Numbers`.
- **Include in guest statistics** — allows the rating to be used in auto-tag conditions and is included in guest statistics.

[[info type=custom color=#E06823]]
If a response has several **Rating** type questions with the guest statistics setting enabled, the system uses the average value of these ratings for this response.
[[/info]]

#### NPS

The **NPS** type is used to assess a guest's willingness to recommend the establishment. It is rated on a scale from 1 to 10.

<!-- ![responses](/ru/images/surveys/surveys/survey-create6.png) -->

[[delimiter rows=1]]

#### Choice

The **Choice** type allows you to offer the respondent ready-made answer options.

<!-- ![responses](/ru/images/surveys/surveys/survey-create7.png) -->

[[delimiter rows=1]]

**Available settings:**

- **Choice type** — Single or multiple choice.
- **Answer options**
- **Other answer** — adds an option, upon selection of which the respondent enters their own text. For the custom option, you can change the name and configure the requirement and length of the entered text.

### Input

The **Input** type is used for text responses and contact data. Within one question, **you can add several fields**, for example name, phone and comment. All filled-in fields are saved as one answer to the question.

<!-- ![responses](/ru/images/surveys/surveys/survey-create8.png) -->

[[delimiter rows=1]]

**Available for each field:**

- **Title**
- **Required**
- **Mask** — determines the format and validation rules for the entered value. Available masks: `Text`, `First name`, `Last name`, `Phone`, `Email`.

## Step 3. Conditions

**Conditions** allow you to change the sequential completion of the survey and direct the respondent to different pages depending on the answer.

<!-- ![responses](/ru/images/surveys/surveys/survey-create9.png) -->

[[delimiter rows=1]]

If conditions are not configured, pages are shown sequentially.

### How to Configure a Transition

1. Open the **Conditions** step.
2. Find the required question.
3. Click `Add condition`.
4. Select the respondent's behavior.
5. Select the target page in the `Transition` field.
6. If necessary, add other conditions.

**Available conditions:**

- **On answer selection** — works for `Rating`, `NPS` and `Choice` questions. Specify one or more values for which the transition should occur.
- **Always** — the transition occurs regardless of the answer.
- **On skip** — triggers if the respondent did not answer. Only available for a non-required question.

[[info type=custom color=#E06823]]
A transition can only be configured forward: the target page must be located after the current one. This eliminates scenario looping.
[[/info]]

If several conditions are configured for a question, the system checks them from top to bottom and executes the first matching condition.

**When changing the structure, take the following into account:**

- If you move the target page before the current one, the transition will become invalid and will need to be reconfigured;
- If you make a question required, the `On skip` condition for it will be reset;
- When a page is deleted, transitions to it are cleared;
- When a question is deleted, conditions related to it are deleted.


## Step 4. Design

The **Design** section changes only the appearance of the web form and does not affect the survey completion logic. The form automatically adapts to mobile devices and computers. The width of the content is determined by the system.

<!-- ![responses](/ru/images/surveys/surveys/survey-create10.png) -->

[[delimiter rows=1]]

**Available settings:**

- Color of background, fields, buttons, accent elements and text;
- Logo;
- Link that redirects when the logo is clicked;
- Background image;
- Background image darkening.

[[delimiter rows=3]]
