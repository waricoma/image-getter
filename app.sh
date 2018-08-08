#!/bin/sh

a=1 #start
while [ $a -lt 211 ] #stop
do
    wget "https://domain/$a.extension"
    a=`expr $a + 1`
done
