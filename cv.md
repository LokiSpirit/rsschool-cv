# Olga Krukova

![My Photo](img/resume.jpg)

### Contact information:

Phone: _+380957248791_

E-mail: krukovaolga1@gmail.com

Telegram: @olgakrukova7771

Discort: OlgaKrukova(@lokispirit)

### About Myself:

**Goal:** To become a java-programmer

**Priorities:**

- interesting, creative work
- decent salary
- the opportunity to develop myself in other IT areas

### Education:

[**Odessa National University of Technology**](https://ontu.edu.ua/)

Management

September 1999 - June 2004 | Ukraine

[**Odessa State Environmental University**](https://odeku.edu.ua/en/main-en/)

Oceanology

September 2011 - June 2016 | Ukraine

### Work Experience:

Sale Manager

September 2004 - Novenber 2011 | Ukraine

### Tech Skills:

1. JAVA Core
2. HTML5
3. CSS3

### Code example:

Complete the method/function so that it converts dash/underscore delimited words into _camel casing_. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

```
public class Solution {

    static String toCamelCase(String s) {
        if(s==null || s.isEmpty()){
            return "";
        }
        String[] split = s.split("[_-]");
        StringBuilder builder = new StringBuilder();
        builder.append(split[0]);
            for (int i = 1; i < split.length; i++) {
                builder.append(split[i].substring(0, 1).toUpperCase() + split[i].substring(1));
            }

        return builder.toString();
    }
}
```

### Languages:

- Ukrainian - Native
- Russian - Native
- English - Intermidiate

