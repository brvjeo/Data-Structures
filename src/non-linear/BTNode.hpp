#ifndef BTNode_hpp
#define BTNode_hpp

#include "BTNode.cpp"

namespace DataStructures {
template<class T> class BTNode {
public:
    BTNode<T>* left;
    BTNode<T>* right;
    T* data;
    
    BTNode<T>();
    ~BTNode<T>();
};
template<class T> BTNode<T>::BTNode(){
    left = right = NULL;
    data = NULL;
}
template<class T> BTNode<T>::~BTNode(){
    left = right = NULL;
    delete data;
}
};

#endif
