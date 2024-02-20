# Mooply

Aplikacja realizowana w ramach programu dotacyjnego “SMART”. Główny cel to opracowanie systemu zarządzania ściekami i oszczędności wody. Stworzona aplikacja agreguje w sobie wielu klientów docelowych - klienta indywidualnego, partnera asenizacyjnego, zlewnie, gminy i wodociągi. Aplikacja musi posiadać reużywalne elementy, ponieważ prawdopodobnie na jej podstawie będą tworzone klony - praktyka nazywa “White label App”. Aplikacja początkowo realizowana w technologii PWA. W przyszłości planowane stworzenie osobnej aplikacji mobilnej

Uruchamianie Vite:

- npm i
- npm run dev-ts
-

Uruchamianie Storybooka:

- npm run storybook

Storybook został wdrożony na platformie Vercel: https://mooply-storybook.vercel.app/. Został skonfigurowany w ten sposób, aby zaciągać zmiany z branchy "storybook-deploy". Dlatego jeśli chcemy go zaktualizować, to należy dociągnąć zmiany do tej gałęzi. 

Automatyczne formatowanie kodu przed commitem wykonuje się za pomocą narzędzi husky + lintstaged.

## Struktura plików

W folderze components znajdują się reużywalne komponenty, wykorzystywane na potrzeby tej i przyszłych aplikacji. Ponieważ liczba komponentów może być bardzo duża, zdecydowano się na wprowadzenie "atomic design": https://bradfrost.com/blog/post/atomic-web-design/. Obok kodu komponentów blisko znajdują się story, zgodnie z zasadą kolokacji. W folderze features znajdą się funkcjonalności charakterystyczne dla danej aplikacji, które powstaną na bazie stworzonych komponentów.

## Tamagui

Na bibliotekę komponentów wybrano Tamagui - https://tamagui.dev/, ze względu na elastyczność - komponenty mogą działać zarówno na Web i React Native.
Na ten moment wykorzystywany jest domyślny theming z biblioteki (plik `tamagui.config.ts`)

```js
const tamaguiConfig = createTamagui(config)
```

Po kliknięciu na config z klawiszem CTRL i ponownym kliknięciu na `...configWithoutAnimations` pokaże się plik z domyślnymi ustawieniami themingu biblioteki. Na przykład:

```js
color = '$gray10'
```

Korzysta z pliku `@tamagui/themes`.

Gdy zajdzie potrzeba customizacji, będzie można skopiować ten kod i dostosować go do własnych potrzeb.
