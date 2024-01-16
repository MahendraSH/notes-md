# MODULE 4:( book 150 ) 

## **table of contents**

- [Tools and methods used in cybercrime](#tools-and-methods-used-in-cybercrime)
- [Proxy servers and anonymizers](#proxy-severs-and-anonymizes)
- [Phishing](#phishing)
- [Password cracking](#password-cracking)
- [ Key loggers and spywares](#keyloggers-and-spywares)
- [Virus and worms](#virus-and-worms)
- [Trojan horses and backdoors](#trojan-horses-and-backdoors)
- [Steganography](#steganalysis)
- [ DoS and DDoS attacks](#dos-and-ddos-attacks)
- [ SQL injection](#sql-injection)
- [ Buffer overflow ](#buffer-overflow)
- [menu](#menu)

---

- # Tools and methods used in cybercrime

  - Stages of an attack on network

  1. initial covering : two stages
     1. Reconnaissance : social networking websities
     2. Uncovers information on company`s IP
  2. Network probe :

     1. ping sweep -seek out potential targets
     2. port scanning

  3. Crossing the line toward electronic crime :
     1. commits computer crime by exploting possible holes on the target system
  4. Capturing the network :
     1. attackers attempts to own the network
     2. uses tools to remove any evidence of the attack
     3. trojan horses , backdoors
  5. Grab the data :
     1. attacker has captured the network
     2. steal confidential data , customer cc information deface webpages ...
  6. Covering the attack :
     1. extend misuse of the attack without being detected
     2. start a fresh reconnaissance to a related traget system
     3. continue use of resources
     4. remove evidence of hacking

---

- # Various tools used for the attack

## **menu**

1.  [Proxy servers and anonymizers](#proxy-severs-and-anonymizes)

    - [Purpose of a proxy server](#purpose-of-a-proxy-server)
    - [An Anonymizer](#an-anonymizer)

---

2.  [Phishing](#phishing)

    - [ how phishing works](#how-phishing-works)

---

3.  [Password cracking](#password-cracking)

    - [the purpose of password caracking](#the-purpose-of-password-caracking)
    - [manual passowrd cracking algorithm](#manual-password-cracking-algorithm)
    - [ Examples of guessable passowrds](#examples-of-guessable-passowrds)
    - [categories of password attacks](#categories-of-password-cracking-attacks)

      - [online attacks](#online-attacks)
      - [offine-attacks](#offine-attacks)

    - [types-of-password-attacks](#types-of-password-attacks)

      - [weak-passwords](#weak-passwords)
      - [strong-passwords](#strong-passwords)
      - [random-passwords](#random-passwords)

---

4.  [ Key loggers and spywares](#keyloggers-and-spywares)

- [keyloggers](#keyloggers)

  - [softare-based-keyloggers](#softare-based-keyloggers)
  - [hardware-keyloggers](#hardware-keyloggers)
  - [acoustic-keylogging](#acoustic-keylogging)

- [antikeylogger](#antikeylogger)

  - [benefits-of-antikeyloggers](#benefits-of-antikeyloggers)

- [spywares](#spywares)

---

5.  [Virus and worms](#virus-and-worms)

    - [what is a virus ?](#what-is-a-virus)
    - [some-typical-virus-actions](#some-typical-virus-actions)
    - [virus-spread-through](#virus-spread-through)
    - [#difference-between-virus-and-worm](#difference-between-virus-and-worm)
    - [types-of-viruses](#types-of-viruses)

      - [boot-sector-viruses](#boot-sector-viruses)
      - [program-viruses](#program-viruses)
      - [multipartite-viruses](#multipartite-viruses)
      - [stealth-viruses](#stealth-viruses)
      - [polymorphic-viruses](#polymorphic-viruses)
      - [macroviruses](#macroviruses)
      - [active-x-and-java-contrl](#active-x-and-java-contrl)

---

6.  [Trojan horses and backdoors](#trojan-horses-and-backdoors)

---

7.  [Steganography](#steganalysis)

---

8.  [ DoS and DDoS attacks](#dos-and-ddos-attacks)

---

9.  [ SQL injection](#sql-injection)

---

10. [ Buffer overflow ](#buffer-overflow)

---

1. # Proxy severs and Anonymizes

- A **proxy server** is a dedicated computer or a software system running on a computer that acts as an intermediary between an endpoint device such as a computer , and another server from which a user or client is requesting a service

- A client connects to the proxy server, requesting some service such as a file , connection, web page, or other resource available from a different server and the proxy server evaluates the request as a way to simplify and control its complexity.

- ## Purpose of a proxy server
  - improve performace
  - Filer requests
  - keep system behind the curtain
  - used as ip address mutiplexer
  - its cache memory can serve all users

Attack on this : the attacker first connects to a proxy server- establishes connection with the target through existing connection with the proxy.

- ## An Anonymizer

  - An **anonymizer** or an anonymous proxy is a tool that attempts to make acticity on the internet untraceable .

  - it is a proxy server computer that acts as an intermediary and privacy shield between a client computer and the rest of the internet .

  - It accesses the internet on the user`s behalf, protecting personal information by hiding the client computers identifying informaction .
  - For example large news outlets such as CNN target the viewers according to region and give different information to different populations .

[menu](#menu)

---

2. # Phishing
   - stealing personal and financial data
   - also can infect sysmtem with viruses
   - a method of online ID theft

- ## How Phishing works ?

  1. **Planning** : use mass mailing and address collection techniques - spammers

  2. **Setup** : E-mail/ webpage to collect data about the target

  3. **Attack** : send a phony message to the target

  4. **Collection** : record the information obtained

  5. **Identiy theft and fraud** : use inforation to commit fraud or illegal purchases

[menu](#menu)

---

3.  # Password Cracking

- password cracking is the process of recovering passwords from data that have been stored in or trasmitted by a computer system .

- a common approach (brute-force attack ) is to try guesses repeatedly for the password and check them against an available cryptographic hash of the password .

- ## The purpose of password caracking

- help a user recover a forgotten password
- to gain unauthorized access to a system .
  or as a preventive measure by system administrators to check for easily crackable passwords

- ## Manual Password Cracking Algorithm

  - Find a valid user
  - Create a list of possible passwords
  - Rank the passwords from high probability to low
  - key in each password
  - if the system allows you in - success
  - else try till success

- ## Examples of guessable passowrds

  - Blank
  - words like "passcode" , " password" , "admin"
  - series of letters like " QWERTY"
  - Name of the user or user friend / relavtive / pet
  - user birt place or date of birth .
  - vehicle number , office number ...
    . name of a celebrity
    . simple modification of one of the precedings suffxing

- ## Categories of password cracking attacks :

  - online attacks
  - offline attacks
  - Non-electornic attacks
    - socail engineering
    - shoulder surfing
    - Dumpster diving

- ### online attacks

  - an attacker may create a script- automated program -to try each password

  - Most popular online attack :- main in the middle attack or bucket-brigade attack

  - used to obtain passwords for email accounts on public websites like gmail etc

  - also to get passwords for financial websites

- ### offine attacks

  - are performed from a location other than the target where these passwords reside or are used

  - require physical access to the computer and copying the password

- ## Types of password attacks

  - **password guessing** :

    - attackers can guess passwords localy or remotely using either a manual or automated approach

  - **Dictionary attacks** :

    - work on the assumption that most passwords consist of whole words, dates or numbers taken from a dictinary .

  - **Hybrid password** :

    - assume that network adminstrators push users to make their passwords at least slightly different from a word that appears in a dictionary .

- ## weak passwords
  - the password contains less than eight characters
  - the password is a word found in a dictinary (English or forign )
  - the password is a common usage word such as : names of family, pets , friends ,co-workers , fantasy characters , etc .
  - computer terms and names ,commands , sites , companies, hardware , software .
  - birthdays and other personal information such as address and phone numbers .
  - word or number pattern like aaabbb , qwerty , xyzabc , 123321 etc ...
  - any of the above spelled backwards .
  - any of the above preceded or followed by a digt (eg: secret. I secret )
- ## Strong Passwords

  - contain both upper and lower case characters (eg: a-z , A- Z)
  - have digts and puntuation characters as well as letters eg: 0-9 @#/$() {} ....
  - at least 8 characters long .
  - must not be a word in any language
  - passwords should never be witten down or stored on-line
  - try to create paswords that can be easily remembered .
  - one way to do this is create a password based on a song title affirmation , or other phrase.
  - for example , the phrase might be : " This may be one way to rember "
  - and the password could be: "TmB1w2R!" or"Tmb1W>r~" or some other variation .

- ## Random passwords

[menu](#menu)

---

4. # keyloggers and Spywares

- ## keyloggers

  - **keystoke logging** , often referred to as **keylogging** or **keyboard capturing** , is the action of recording (or logging ) the keys struck on a keyboard, trypically in a covert manner so that the person using the keyboard is unaware that their actions are being monitored .
  - it has uses in the study of human- computer interaction .

  - there are numerous keylogging methods ranging from hardware and software-based approaches to acoustic analysis .

- ## softare-based keyloggers

  - **software-based keyloggers** use the target computers os in various ways, including : imitaiting a virtual machine , acting as the keyboard driver (kernel- based ), using the application programming interface to watch keyboard strokes ( API -based), based forms ( Form Grabber based ) or capturing network traffic associated with HTTP POST events to steal passwords (Packet analyzers).

  - usually consists of two files DLL and EXE

- ## Hardware keyloggers

  - installing a hardware circuit between the keybord and the computer that logs keyboard stroke activity (keyboard hardware).

  Target - ATMs

- ## Acoustic keylogging

  - **acoustic keylogging** monitors the sound created by each individual keystroke and uses the subtly different acoustic signature that each key emits to analyze and determine what the target computers user is typing .

- ## AntiKeylogger

  - an **antikeylogger** ( or anti-keystoke logger) is a type of software specifically logger software ; often, such software will also incorporate the ability to delete or at least immobilize keystroke logger software on your computer .

- ### Benefits of antikeyloggers

  - **keylogger removal**

    - it removes keyloggers that are running or being launched in your computer or mobile

  - **Security**

    - it ensures us that confidentiall information would not be stolen from our hard drives or computer units and , prevents us from being a vitim of cyber crimes and thefts .Financial instiutions are usually targets of keyloggers. AntiKeyloggers perform regular scans in any computer.

  - **keylogger detector**

    - Apart from the "disabling" feature , the antikeylogger provides a warnng whenever a keylogging activity is being launched in your unit

  - **protects privacy**

    - as stated in reviews it prvents your data or activities from being revealed through these keyloggers . Your messages , calls , videos , dowloaded files , emails , website vists and other online transactions remain private unless you would reveal them yourself .

  - **user frindly and reliable**

    - The anti-logger is easy to use and high reliable

- ## spywares

  - **Spyware** is software that aims to gather information about a person or orgnaization without their knowledge and that may send such infromation to another enity without the consuers conesent or that assers control over a computer without the consumers knowledge

[menu](#menu)

---

5. # Virus and worms

- ## what is a virus ?
- A computer virus is a **malware** prograrm that when executed repicates by inserting copies of itself (possibly modified) into other computer programs , data files , or the boot sector of the hard drive ; when this replication succeds the affected areas are then said to be "**infected**"

- ## some typical virus actions

  - display a message to prompt an action
  - delete files in the system
  - scramble data on a hard disk
  - cause erratic screen behavior
  - halt the system
  - replicate themselves to propagate further harm

- ## virus spread through

  - The internet
  - a stand alone pc
  - local networks

- ## difference between virus and worm

  |                                         | Computer  virus                                                                                                             | computer worm                                                                                |
  | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
  | how  does it infect a computer system ? | it inserts itself into a file or  executable program                                                                        | it exploits a weakness in application or operating system by replacing itself                |
  | how can it spread?                      | it has to rely on users transfering files/ programs to other computer systems                                               | it can use a network to replicate itself to other computer systems without user intervention |
  | Does it infects files?                  | yes , it deletes or modfies fiels. soemtimes a virus also changes the location of file                                      | usually not worms usually only monopolize the CPU and memory                                 |
  | whose speed is more?                    | virus is slower than worm                                                                                                   | worm is faster than virus . Eg: the code red worm affected 3 lack pcs in just 14hrs          |
  | Definition                              | The virus is the program code that attacks itself to application program and when application program runs it along with it | The worm is code that repicate itself in order to consume resource to bring it down          |

- ## types of viruses
  - boot sector viruses
  - program viruses
  - mutipartite viruses
  - Stealth viruses
  - macro viruses
  - active x and java contrl
- ### boot sector viruses
- ### program viruses
- ### multipartite viruses
- ### stealth viruses
- ### polymorphic viruses
- ### Macroviruses
- ### Active x and java contrl

[menu](#menu)

---

6. # Trojan horses and Backdoors

- ## Examples of threats by trojans

- ## Backdoors

- ## functions of backdoors

- ## Examples of backdoors trojans

- ## how to protect from Trojan Horses and backdoors

[menu](#menu)

---

7. # Steganography

- Steganography (from greek steganos , or "covered" and graphie or "writting" ) is the hiding of a secret message within an ordinay message and the extraction of it at its destinaation

- steganography takes cryptography a step farther by hiding an encrypted message so that no one suspects is exists . Ideally anyone scanning your data will fail to know it contains encrypted data .

- other names : data hiding , inforamtion hiding , digital watermarking .

- ## digital water marking

  - Digital watermarking is the act of hiding a message (trademark) related to a digital signal (i.e. an image ,song , video ) with the signal itself .

  - it is a concept closely related to steganography in that they both hide a message inside a digital signal .

  - however , what separates them is their goal .

  - watermarking tries to hide a message related to the actual content of the digital signal ,

  - while in steganography the digital signal has no relation to the message , and it is merely used as a cover to hide its existence .

- ## difference between steganography and cryptography

  - Cryptography is the study of hiding information , while Steganography deals with composing hidden messages so that only sender and the receiver know that message even exits .

  - In steganography only the sender and the recever know hte existence fo the message , where in cryptography the existence of encrypted message is visible to the world .

  - Due to this Steganography removes the unwanted attention coming to the hidden message

  - Cryptographic methos try to protect the content of a message , while Steganography uses methods that would hide both the message as well as the content
  - By combining Steganography and cryptography one can achieve secuity.

- ## Steganalysis

  - **Steganalysis** is the study of detecting messages hidden using steganography ;

  - The goal of steganalysis is to identify suspected packages determine whether or not they have a payload encoded into them , and if possible , recover that payload .

[menu](#menu)

---

8. # DOS and DDos attacks

   - in computing a **denial-of-service** (Dos) or **distributed denial-of-service** (DDos) attack is an attempt to make a machine or network resource unavailable to its intended users .

   - A Dos attack generally consits of effors to temporarily or indefinitely interrupt or suspend services of a host conneted to internet .

- ## symptooms of Dos attacks

  - Slow network performace
  - unavailability of a particular webiste
  - inability to access any website
  - dramatic increase in number of spam e-mails received

- ## A Dos attack may be because of following

  - Flood the traffic , thereby preventing network traffic
  - Disrupt connections between two systems- preventing access to service
  - Prevent a particular individaul from accessing a service
  - Disrupt service to a specific or person

- ## Classification of Dos

  - Bandwidth attacks
  - logic attacks
  - potocol attacks
  - Unintentional Dos attack

- ### Bandwidth attacks

  - The most comman Dos attacks

  - target the computers network bandwidth or connectivity .

  - bandwidth attacks flood the network with such a high volume of traffic , that all available network resources are consumed and legitimate user requests can not get through

- ### logic attacks

  - An attacker sends more requests to a server than it can handle , usually in a relentless manner , until the server buckles and gives in to the attacker. Once this type of attack ends , the server can return to normal operation.

  - generally a logic attack requires your server to have a discoverable weakness that the attacker can locate and then use against it .

  - because of this prerequiste it is usually easy to prevent by keeping your sever software and hardware up-to-datte with the latest security patches and firmware respectively

- ### potocol attacks

  - Denial of service attacks may take advantage of certain standard protocol features .

  - Several attackscapitalize on the fact that IP source address cna be spoofed .

  - in additon connection depletion attacks take advantage of the fact that many connection-oriented protocols after a connection require servers to maintain state inforamation after a connection request is made but before the connection is fully established .

  - The most common connection depletion attack is SYN flooding .

- ### Unintentional Dos attack

  - This describes a situation where a website ends up denied, not due to a delierate attack by a single individual or group of individuals , but simply due to a sudden enormous spike in popularity .

  - This can happen when an extermly popular website postsa a promient like to a second less well prepared site , for example, as part of a news story .

- ## types orlevels of Dos attacks
  - Flood attack
  - ping of death attack
  - syn attack
  - Teardrop attack
  - smurf attack
  - nuke
- ### Flood attack

  - Flooding is a Denial of service (Dos ) attack that is designed to bring a network or service down by flooding it with large amount of traffic .

  - Flood attacks occur when a network or a service becomes os weighed down with packets intitiating incomplete connection requests that it can no longer process genuine connection requiests .

  - By flooding a server or a host with connections that cannot be completed , the flood attack eventaully fills the hosts memory buffer . Once this buffer is full no further connections can be made , and the result is a Denial of Service .

- ### ping of death attack

  - ping of death is a denial of service attack causes by an attacker delibertely sending an IP packet of size larger then 65536 bytes allowed by the IP protocaol .

- ### syn attack

  - A SYN flood occurs when a host sends a flood of TCP/SYN packets often with a forged sender address.

  - Each of these packets are handled like a connection request causing the server to spawn a half open connection ,by sending a TCP/SYN-ACK packet (Acknowledge) and wating for a packet in response from the sender address (response to the ACK Packet ).

  - However , because the sender address is forged the response never comes . These half-open connections salurate the number of available connections the server can make , keeping it from responding to legitimate requests until after the attack ends .

- ### Teardrop attack

  - A teardrop attack is a denial of service (Dos ) attack conducted by targeting TCP/IP fragmentaion reassembly codes.

  - This attack causes fragmented packets to overlap one another on the host receipt ;

  - the host attempts to reconstruct them during the process but fails .

  - Gigantic payloads are sent to the machine that is being targeted causing system crashes .

- ### smurf attack

  - A smurf attack is a type of denial of service attack in which a sytem is flooded with spoofed ping messages .

  - this creates high computer network traffic on the victims network, which often renders in unresponsive .

- ### nuke

  - A nuke is an old denial-of-service attack against computer networks consisting of fragmented or otherwise invaild ICMP packets sent to the target achieved by using a modified ping utility to repeatedly send this corrupt data , thus slowing down the affected computer until it comes to a complete stop .

  -

- ## how to prevent dos/ddos attacks

  - **Filtering** : Routers at the edge of the network can be trained to stop and drop DDOs connectons , preventing them from slowing the network or the server .

  - **Moving** : if the attack is pointed at specific IP address , the site s IP can be changed .

  - **Blackholling** : A host may simply "blackhole " a site that is being DDosed , directing all tarffic to it to an address that does not exist . This is normally a last resort .

[menu](#menu)

---

9. # sql injection

- **SQL injection** is a code injection technique used to attack data-driven applications , in which malicious **SQL** statments are inserted into an entry field for execution (eg : dump the database contents to the attacker ).

- It is the type of attack that takes advantage of improper coding of your web applications that allows hacker to inject SQL commands into say a login form to allow them to gain access to the data held within your database .

- ## what an attacker can do in sql injection ?

  - Bypassing logins : by obtaing usernames and passwords

  - Accessing secret data : reconnaissance

  - Adding new data or removing or modifying contents of webiste : INSERT/UPDATE/DELETE

  - Shutting down the MY SQL server .

- ## steps for sql injection attack

  - **Step - 1 : finding Vulnerable webiste :**
    - finding the vulnerable website using Google Dork list .
    - google dork is seraching for vulnerable websites using goole serarch tricks
    - use "inurl" commands for finding the vulnerable websites .
    - some examples :
      - inurl:index.php?id=
      - inurl:gallery.php?id=
      - inurl:artical.php?id=
      - inurl:pageId=
    - **How to use?**
      - copy one of the the above commands and paste in the google serach engine box .
      - hit enter .
      - you can get a list of website .
      - we have to vist website one by one to find the vulnerabillty .
  - **Step-2 Checking the vulnerability :**

    - Now we should ckeck the vulenrability of websites .
    - in order to check the vulenrability , add teh single quotes(') at teh end of the url and hit enter
    - for eg:
      https://www.vitimesite.com.index.php?id=2'

      - if the page remains in same page or showing that page not found or shoeing some other webpages then is it not vulnerable .

      - If it showing any errors which is related to sql query , then it is vulnerable .

  - **step-3 Finding Number of Columns :**

    - Now we have found teh website is vulnerable.
    - next step is to find the number of columns in the table
    - for that replace single quotes(')with "order by n" statement
    - change the n from 1, 2 ,3 4, 5 ,..... n .untial you get the error like "unknown Column " .

    - for eg :

      - https://www.vitimesite.com.index.php?id=2 order by 1

      - https://www.vitimesite.com.index.php?id=2 order by 2

      - https://www.vitimesite.com.index.php?id=2 order by 3

      - https://www.vitimesite.com.index.php?id=2 order by 4
        .........
      - https://www.vitimesite.com.index.php?id=2 order by 8 (error )
        so now x=8 therfore the number of columns is 7 .

  - **Step-4 Displaying the vulnerable columns:**

    - using "union select columns sequnce " we can find the vulnerable part of the table Replace the "order by n " with this statement .

    - And change the id value to negative

    - Replace the columns_sequence with the no from 1 to x-1 (number of columns )separated with commas(, ).

    - for eg :

      - if the number of columns is 7 , then query is as follow :

      - https://www.vitimesite.com.index.php?id=-2union select 1,2,3,4,5,6,7

- ## blind sql injection

  - Blind sql injection is used when a web applicaion is vulnerable to an SQL injection but the results of the injectioins are not visible to the attaker .

  - The page with the vulnerabillty may not be one that displays data but will displa differntly depending on the reults of a logical statement injected into the legitimate SQL statement called for that page .

  - This Type of attack can become time-intensive because a new statment must be crafted for each bit recoverd .

  - There are serveral tools that can automate these attacks once the location of the vulnerablity and the target inforamtion has been established .

- ## how to prevent sql injection attacks

  - Input vaildation :

    - Replace all single quotes to two single quotes
    - Sanitize the input: clean characters like ; - select etc
    - Number values Should be checked while accepting a query string value
    - keep all text boxes and form fields short

  - Modify error reports
    - SQL errors should not be displayed to the outside world
  - Other preventions
    - Never use default system accounts for SQL server 2000
    - Isolate database server and webserver : different machines
    - Extended stored procedures user defined fuctions should be moved to an isolated server.

[menu](#menu)

---

10. # Buffer overflow

- in computer security and programming a buffer overflowor buffer overun , is an anomaly where a program , while writing data to a buffer ,overuns the buffer's boundary and overwrites adjacent memory safety .

- This may result in erratic program behavior

- Buffer overflows are not easy to discover and even when one is discovered it is generally extremely diffcult to exploit .

- in a clasic buffer overflow exploit , the attacker sends , data to a program , which it stores in an undersized stack buffer the result is that inforamtion on the calll stack buffer .The result is that inforamtion on the call stack is overwitten including the fucton's return pointer .

- The data sets the value of the return ponter so that when the function returns is transfers control to malicious code contained in the attacker's data.

- At the code level , buffer overflow vulnerabilities usually invole the violation of a programmer's assumptions .

- Many mermory manipulations functons in C and C++ do not perform bounds ckecking and can easily overwite the allocated bounds of the buffers they operate upon .

- Even bounded functions of memory manipulation and mistaken assumptions about the size or makeup of a piece of data is the root cause of most buffer overflows

- ## example

  - The code in this example also relies on user input to control its behaviour but it adds a level of indirection with the use of the bounded memory copy function memory ().

  - This function accepts a destination buffer, a source buffer and the number of bytes to copy The input buffer is filled by a bounded call to read() . but the user specifies the number of bytes that memory () copies .
    .... char buf[ 64 ] , in [ max_size ];
    printf("Enter buffer contents : \n " );
    read(0 , in max_size-1);
    printf("Bytes to copy : \n ");
    scanf("%d", &bytes);
    memcpy(buf, in bytes)....

  - **Note** : This type of buffer overlflow vulnerabilty (when a program reads data and then trusts a value from the data in subsequent memory operations on the reaming data) has turned up with some frequency in image , audio , and other file processing libraries

- ## Types of buffer overflow

  - stack-based buffer overflow
  - heap buffer overflow
  - NOPs

- ### stack-based buffer overflow

  - A stack-based buffer overflow condition is a condition where the buffer being overwritten is allocated on the stack

  - Attack may exploit ths to manipulate the progarmy by
    - changing the local variable
    - changin the return address
    - Changing the fuction pointer or exececption handler

- ### heap buffer overflow

  - a **heap buffer overflow** is a type fo**buffer overflow** that occurs in the heap data area .

  - Heap overflows are exploitable in a differnt manner to that of stack-based overflows .

  - memory on the heap is dyamically allocated by the application ways to cause the application to overwrite internal structures such as linked list pointers .

  - The cononical heap overflow technique overwrites dynamic memory allocation linkag (such as malloc meta data) and uses the resulting pointer exchange to overwrite a program function pointer .

- ### NOPs

  - A NOP-sled is the oldest and most widely known technique for succesfull exploting a stack buffer overflow .

  - To do this much larger sections of the stack are corrupted with the **no-op** machine instructon . at the end of the attacker places an instruction to perform a relative jump to the top of the buffer where the **shelcode** is located .

  - This collection of no-ops is refered as the **NOP-sled** because if the return address is overwitten with any address within the no ops until it is redirected to the actual malicious by the jump at the end .

- ## how to minimize buffer overflow

  - assessment of secure code manually
  - disable stack execution
  - complier tools
  - dynamic run time checks
  - various tools are used to detect / defend buffer overflow
    - stack Gaurd
    - propolice
    - LibSafe

[menu](#menu)

---
