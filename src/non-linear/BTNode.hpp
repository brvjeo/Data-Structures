#ifndef BTNode_hpp
#define BTNode_hpp

#include <stdio.h>
namespace DataStructures {
template<typename T> class BTNode {
public:
    BTNode* left;
    BTNode* right;
    T value;
    
    BTNode<T>();
};
template<typename T> BTNode<T>::BTNode(){
    left = right = NULL;
}
};
#endif
