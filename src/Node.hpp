#ifndef Node_hpp
#define Node_hpp

#include <stdio.h>

namespace DataStructures {
template<typename T> class Node {
public:
    Node<T>* next;
    Node<T>* prev;
    T value;
    
    Node<T>();
};
template<typename T> Node<T>::Node(){
    next = prev = NULL;
}
};
#endif
