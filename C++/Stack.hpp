#ifndef Stack_hpp
#define Stack_hpp

#include <stdio.h>
#include "LinkedList.hpp"

using namespace std;

namespace DataStructures {
template<typename T> class Stack final: protected LinkedList<T>{
public:
    void push(T value);
    T pop();
    int getLength();
};
template<typename T> void Stack<T>::push(T value){
    LinkedList<T>::push(value);
}
template<typename T> T Stack<T>::pop(){
    return LinkedList<T>::pop();
}
template<typename T> int Stack<T>::getLength(){
    return LinkedList<T>::getLength();
}
};
#endif
