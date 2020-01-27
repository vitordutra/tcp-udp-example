# TCP and UDP Examples

Example of TCP and UDP using Node.js

How to run tcp.js:

Run Debug Server on VS Code (F5)

Type in shell:

telnet 127.0.0.1 8080
OR
telnet localhost 8080

Test by sending strings to the local server
Read the output

---------------------------------------
How to run udp.js:

Type in shell:

How to run tcp.js:

Run Debug Server on VS Code (F5)

echo "foo" | nc -w1 -u 127.0.0.1 8081

Test by changing the string after echo.

e.g.
echo "bar" | nc -w1 -u 127.0.0.1 8081

echo "spam" | nc -w1 -u 127.0.0.1 8081

