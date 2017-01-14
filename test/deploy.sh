#!/bin/bash

if [[ $TRAVIS_OS_NAME == 'osx' ]]; then

    # Install some custom requirements on OS X
    # e.g. brew install pyenv-virtualenv
else
    wget http://download.sourceforge.net/libpng/libpng-1.6.17.tar.gz
    tar zxf libpng-1.6.17.tar.gz
    cd libpng-1.6.17
    ./configure
    make
    make install
    ldconfig
fi
