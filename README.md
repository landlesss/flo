# Room for context

Independent React/TypeScript interaction study for Flo, by Sara Landau. Not affiliated with Flo Health.

## Try it

`npm install`, then `npm run dev`. Production: `npm run build` (output: `dist`). Vercel: Vite preset, build `npm run build`, output `dist`.

1. Open the experience and select “Not yet”.
2. Choose Travel & time zones and load the fictional example, or enter fictional text.
3. Review your answer and continue. The selected travel topic routes to a question about the timing of the trip; sleep routes to a sleep-timing question. Other context uses a general next-step question.
4. Choose an answer, then edit your earlier context. The downstream answer is cleared and must be given again.
5. Open Scenario studio, change the prompt, input limit or optional text setting, then apply and restart.
6. Buttons only is an illustrative comparator, not a reproduction or screenshot of Flo.

## What is real

Working React interfaces, controlled form inputs, validation, branching from user-selected context, an editable review step, configurable prompt/limits and memory-only state. No health text is persisted or sent by the application. External Google Fonts requests load typography; no form data is attached to those requests.

## What is illustrative

The check-in, all dialogue copy and response examples are fictional. No LLM, backend, actual push notification, clinical reasoning, calendar logging, Flo SDK or medical advice is implemented. Typed text is preserved verbatim; context topics are selected by the user, never automatically extracted. Travel takes precedence if both travel and sleep are selected; this is a demonstration rule, not a medical priority.

The proposed notification is an opt-in entry point for future work, not a feature of this web demo. Production medical content, safety routing, privacy, retention and consent require specialist review.

## Source and hypothesis

A personal observation of one Flo flow prompted this study. Flo's public help article says Health Assistant answers already submitted cannot be changed:
https://help.flo.health/hc/en-us/articles/360052676191-How-do-I-chat-with-Flo-Health-Assistant

This does not establish what is available in every market, subscription or app version. The hypothesis is that an optional context step and editable review can help people feel understood. No retention, clinical outcome or conversion improvement is claimed.

## Verification

`npm test`: five unit tests cover blank input, configured length boundary, reversible topic selection, absence of automatic inference and immutable summary data.

Browser checks cover the main flow, travel follow-up, revision, required input feedback and applying a prompt with free text disabled. Unit tests do not cover the full React state machine. Production build verified with TypeScript and Vite. Responsive layouts are included; this is not a complete accessibility or cross-browser audit.

## Interface revision

The conversation shell was revised after reviewing a privately supplied screen recording: white chat background, gray assistant bubbles, pink user bubbles, a compact Flo header and bottom answer panel. The new optional text field sits inside that panel. Reference frames and personal information from the recording are not included in this repository or build. Copy and conversation scenarios remain fictional; this is not a full reproduction of the app.

## Article search

The Insights concept indexes six hand-selected public Flo articles, with local keyword search, manually provided Russian/English topic keywords and category filters. These are live source links, not reproduced article bodies or AI-generated medical answers. The index is not connected to Flo's CMS or full content catalogue. No raw chat text is automatically passed to search or an external service. Opening search from the chat preserves the conversation and draft in component memory; it is cleared on refresh.

Sources are listed in `src/library.ts`. A link preview identifies Flo as the publisher and opens the original article in a separate tab. Search includes empty-state messaging and a clear-filter action. Five search tests cover bilingual keywords, normalization, combined filters, multi-word search and empty results. There are ten unit tests in total.

Flo already provides a Symptom Checker (https://flo.health/product-tour/symptom-checker); this proposal concerns content discovery. The missing-search observation refers only to the section the author used, not every app version. A future AI layer grounded in clinically reviewed content remains proposed, not implemented.
