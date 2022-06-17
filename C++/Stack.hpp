#ifndef Stack_hpp
#define Stack_hpp

#include <stdio.h>

using namespace std;

namespace DataStructures {
template<typename T,class C> class Stack final {
    C* structure;
public:
    Stack<T,C>();
    ~Stack<T,C>();
    int getLength();
    void push(T value);
    T pop();
};
template<typename T,class C> Stack<T,C>::Stack(){
    structure = new C;
}
template<typename T,class C> Stack<T,C>::~Stack(){
    delete structure;
}
template<typename T,class C> void Stack<T,C>::push(T value){
    structure->insert(getLength(),value);
}
template<typename T,class C> T Stack<T,C>::pop(){
    return structure->pull(getLength()-1);
}
template<typename T,class C> int Stack<T,C>::getLength(){
    return structure->getLength();
}
};
#endif
