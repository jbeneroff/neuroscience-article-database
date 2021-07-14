# Neuroscience-Article-Database

# Project Overview

## NeuroLog

[NeuroLog Website](URL)

## Project Description

NeuroLog is a react build which shows users a database of neuroscience-related research articles. Users will be able to view current research, add new articles, and delete them. It will have a second Airtable with a popular news geared towards less science-inclined users. As a PMVP I will possibly add an external API with a larger databse of journal articles, a voting system for the article list page, and the delete button will also require a password.

## Wireframes

[Wireframe](https://wireframe.cc/IsDCjP)

## Component Hierarchy

[Component Hierarchy](https://whimsical.com/p2-component-hiearchy-6mJuAWPjFT3EJXG5tZDDkM)

## API and Data Sample

```json
{
  "records": [
    {
      "id": "rec7kT0rP7c73rhg9",
      "fields": {
        "title": "Hippocampal sequencing mechanisms are disrupted in a maternal immune activation model of schizophrenia risk",
        "authors": "Lucinda J. Speers, Kirsten R. Cheyne, Elena Cavani, Tara Hayward, Robert Schmidt and David K. Bilkey",
        "abstract": "Episodic memory requires information to be stored and recalled in sequential order, and these processes are disrupted in schizophrenia. Hippocampal ph...",
        "link": "https://www.jneurosci.org/content/early/2021/07/12/JNEUROSCI.0730-21.2021"
      },
      "createdTime": "2021-07-13T17:14:58.000Z"
    }
  ],
  "offset": "rec7kT0rP7c73rhg9"
}
```

#### MVP

- Home page with navigation bar to article list and add an article pages.
- Get and render articles from Airtable.
- Use forms to add articles and update Airtable.
- Delete articles from the Airtable.
- Add second Airtable with news

#### PostMVP

- Requiring a password to delete articles
- Search article list function
- Add external API with large database of journal articles
- Add voting system for article list page
- Make it look really good

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

| Day        | Deliverable                                        | Status     |
| ---------- | -------------------------------------------------- | ---------- |
| July 12    | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| July 13    | Project Approval                                   | Complete   |
| July 14    | Core Application Structure / Code                  | Complete   |
| July 14    | Initial Clickable Model / MVP                      | Incomplete |
| July 15    | MVP                                                | Incomplete |
| July 16    | MVP / PMVP                                         | Incomplete |
| July 17-19 | PMVP                                               | Incomplete |
| July 20    | Presentations                                      | Incomplete |

## Timeframes

| Component                              | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Proposal and Approval          |    H     |      3hrs      |     3hrs      |    3hrs     |
| Building Airtable Elements             |    H     |      2hrs      |     2hrs      |    2hrs     |
| Basic React App Structure              |    H     |      3hrs      |     3hrs      |    3hrs     |
| Navbar                                 |    H     |      1hrs      |     1hrs      |    1hrs     |
| Article List Component                 |    H     |      3hrs      |     1hrs      |    1hrs     |
| Article Details Component              |    H     |      3hrs      |     1hrs      |    1hrs     |
| Forms                                  |    H     |      3hrs      |     1hrs      |    1hrs     |
| Delete Function                        |    H     |      1hrs      |     1hrs      |    1hrs     |
| Debugging                              |    H     |      4hrs      |     1hrs      |    1hrs     |
| Basic CSS Component Styling            |    H     |      3hrs      |               |             |
| Advanced CSS Styling                   |    H     |      6hrs      |               |             |
| Adding Second Airtable w/ Component    |    H     |      3hrs      |     1hrs      |    1hrs     |
| PMVP: Voting System                    |    M     |      3hrs      |               |             |
| PMVP: Adding External API w/ Component |    M     |      3hrs      |               |             |
| Total                                  |    H     |      41rs      |               |             |

## SWOT Analysis

### Strengths: I have a good understanding of react apps and components. I also have several similar builds from labs that I can review.

### Weaknesses: I sometimes have trouble with mapping through the APIs.

### Opportunities: I am excited to show off my skill in building react apps, using Airtable, and designing a great looking app.

### Threats: I'll sometimes get stuck spending too much time on CSS styling. Or get stuck on something not functioning and then come back later to realize it was just a tiny typo.
